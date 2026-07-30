import {
    ArrowLeft,
    ArrowRight,
    Flag
} from "lucide-react";

export default function QuizNavigation({

    currentQuestion,
    totalQuestions,

    selectedAnswer,
    answerResult,

    onPrevious,
    onSubmit,
    onNext

}) {

    const isLastQuestion =
        currentQuestion === totalQuestions;

    return (

        <div
            className="
                sticky
                bottom-6
                z-20
                mt-8
            "
        >

            <div
                className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white/95
                    p-5
                    shadow-xl
                    backdrop-blur
                "
            >

                <div className="flex items-center justify-between">

                    {/* Previous */}

                    <button

                        onClick={onPrevious}

                        disabled={currentQuestion === 1}

                        className="
                            flex
                            items-center
                            gap-2
                            rounded-2xl
                            border
                            border-slate-300
                            px-6
                            py-3
                            font-semibold
                            text-slate-700
                            transition

                            hover:bg-slate-100

                            disabled:cursor-not-allowed
                            disabled:opacity-40
                        "
                    >

                        <ArrowLeft size={18}/>

                        Previous

                    </button>

                    {/* Right Button */}

                    {

                        !answerResult ?

                        (

                            <button

                                onClick={onSubmit}

                                disabled={selectedAnswer === null}

                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-2xl
                                    bg-blue-600
                                    px-7
                                    py-3
                                    font-semibold
                                    text-white
                                    transition

                                    hover:bg-blue-700

                                    disabled:cursor-not-allowed
                                    disabled:bg-slate-300
                                "
                            >

                                Submit Answer

                                <ArrowRight size={18}/>

                            </button>

                        )

                        :

                        (

                            <button

                                onClick={onNext}

                                className={`
                                    flex
                                    items-center
                                    gap-2
                                    rounded-2xl
                                    px-7
                                    py-3
                                    font-semibold
                                    text-white
                                    transition

                                    ${
                                        isLastQuestion
                                        ?
                                        "bg-green-600 hover:bg-green-700"
                                        :
                                        "bg-blue-600 hover:bg-blue-700"
                                    }
                                `}
                            >

                                {

                                    isLastQuestion
                                    ?

                                    "Finish Quiz"

                                    :

                                    "Next Question"

                                }

                                {

                                    isLastQuestion
                                    ?

                                    <Flag size={18}/>

                                    :

                                    <ArrowRight size={18}/>

                                }

                            </button>

                        )

                    }

                </div>

            </div>

        </div>

    );

}
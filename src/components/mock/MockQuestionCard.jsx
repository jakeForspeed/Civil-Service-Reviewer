import { HelpCircle } from "lucide-react";


export default function MockQuestionCard({
    question,
    currentQuestion,
    totalQuestions
}) {

    if (!question) return null;


    return (

        <div
            className="
                mb-4
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
            "
        >

            {/* Header */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-slate-200
                    px-5
                    py-3
                "
            >

                <div className="flex items-center gap-3">


                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-blue-100
                            text-blue-600
                        "
                    >

                        <HelpCircle size={20}/>

                    </div>


                    <div>

                        <p
                            className="
                                text-xs
                                font-semibold
                                uppercase
                                text-blue-600
                            "
                        >

                            Question

                        </p>


                        <p
                            className="
                                text-sm
                                font-bold
                                text-slate-900
                            "
                        >

                            {currentQuestion} of {totalQuestions}

                        </p>


                    </div>


                </div>


            </div>



            {/* Question */}

            <div
                className="
                    px-5
                    py-6
                "
            >

                <p
                    className="
                        text-lg
                        font-semibold
                        leading-relaxed
                        text-slate-900
                    "
                >

                    {question.question}

                </p>


            </div>


        </div>

    );

}
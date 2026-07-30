import {
    ArrowLeft,
    ArrowRight,
    Send
} from "lucide-react";


export default function MockFooter({

    currentQuestion,
    totalQuestions,

    onPrevious,
    onNext,
    onSubmit

}) {


    const lastQuestion =
        currentQuestion === totalQuestions;



    return (

        <div
            className="
                mt-4
                flex
                items-center
                justify-between
            "
        >


            <button
                onClick={onPrevious}
                disabled={currentQuestion === 1}
                className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-slate-700
                    disabled:opacity-40
                "
            >

                <ArrowLeft size={16}/>

                Previous

            </button>



            {


            lastQuestion ?


            <button
                onClick={onSubmit}
                className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-green-600
                    px-5
                    py-2
                    text-sm
                    font-semibold
                    text-white
                    hover:bg-green-700
                "
            >

                Submit Test

                <Send size={16}/>

            </button>


            :


            <button
                onClick={onNext}
                className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-2
                    text-sm
                    font-semibold
                    text-white
                    hover:bg-blue-700
                "
            >

                Next

                <ArrowRight size={16}/>

            </button>


            }


        </div>

    );

}
import { Timer } from "lucide-react";
import { formatTime } from "../../utils/formatTime";


export default function MockTimer({timeRemaining}){

    return (

        <div
            className="
                mb-5
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5
                py-3
                shadow-sm
            "
        >

            <div className="flex items-center gap-2">


                <Timer
                    size={18}
                    className="text-red-500"
                />


                <span
                    className="
                        text-sm
                        font-medium
                        text-slate-600
                    "
                >

                    Remaining Time

                </span>


            </div>


            <span
                className="
                    font-bold
                    text-blue-600
                "
            >

                {formatTime(timeRemaining)}

            </span>


        </div>

    );

}
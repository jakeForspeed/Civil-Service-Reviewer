import {
    ClipboardCheck,
    LogOut
} from "lucide-react";

import { Link } from "react-router-dom";


export default function MockHeader(){

    return (

        <div
            className="
                mb-5
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-sm
            "
        >

            <div className="flex items-center justify-between">


                <div>

                    <span
                        className="
                            inline-flex
                            rounded-full
                            bg-blue-100
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            text-blue-700
                        "
                    >

                        MOCK TEST

                    </span>


                    <h1
                        className="
                            mt-2
                            text-xl
                            font-bold
                            text-slate-900
                        "
                    >

                        Civil Service Practice Exam

                    </h1>


                    <p
                        className="
                            text-sm
                            text-slate-500
                        "
                    >

                        Answer all questions before submitting.

                    </p>


                </div>



                <Link
                    to="/"
                    className="
                        rounded-xl
                        border
                        px-3
                        py-2
                        text-sm
                        font-medium
                        text-slate-600
                        hover:bg-slate-100
                    "
                >

                    Exit

                </Link>


            </div>


        </div>

    );

}
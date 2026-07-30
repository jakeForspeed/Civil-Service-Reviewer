import {
    RotateCcw,
    Home,
    BookOpen,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function ResultActions({

    onRetry,

}) {

    return (

        <div
            className="
                mt-8
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
            "
        >

            <div className="text-center">

                <h2
                    className="
                        text-2xl
                        font-bold
                        text-slate-900
                    "
                >

                    What's Next?

                </h2>

                <p
                    className="
                        mt-2
                        text-slate-500
                    "
                >

                    Continue improving your Civil Service Exam preparation.

                </p>

            </div>

            {/* Primary Action */}

            <button

                onClick={onRetry}

                className="
                    mt-8
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-blue-600
                    py-4
                    text-lg
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-700
                    active:scale-[0.98]
                "

            >

                <RotateCcw size={22} />

                Take Another Mock Test

            </button>

            {/* Secondary Actions */}

            <div className="mt-5 grid gap-4 md:grid-cols-2">

                <Link

                    to="/review"

                    className="
                        flex
                        items-center
                        justify-center
                        gap-3
                        rounded-2xl
                        border
                        border-slate-300
                        bg-white
                        py-4
                        font-semibold
                        text-slate-700
                        transition
                        hover:bg-slate-100
                    "

                >

                    <BookOpen size={20} />

                    Practice by Topic

                </Link>

                <Link

                    to="/"

                    className="
                        flex
                        items-center
                        justify-center
                        gap-3
                        rounded-2xl
                        border
                        border-slate-300
                        bg-white
                        py-4
                        font-semibold
                        text-slate-700
                        transition
                        hover:bg-slate-100
                    "

                >

                    <Home size={20} />

                    Back to Home

                </Link>

            </div>

        </div>

    );

}
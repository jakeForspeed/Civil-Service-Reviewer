import {
    RotateCcw,
    BookOpen,
    Home
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ResultActions({
    onRetry,
}) {

    return (

        <div
            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
            "
        >

            <h3
                className="
                    mb-5
                    text-lg
                    font-bold
                    text-slate-900
                "
            >
                What would you like to do?
            </h3>

            {/* Primary Action */}

            <button
                onClick={onRetry}
                className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-blue-600
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-700
                "
            >

                <RotateCcw size={20} />

                Try Again

            </button>

            {/* Secondary Actions */}

            <div className="mt-4 grid grid-cols-2 gap-4">

                <Link
                    to={"/review"}
                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-2xl
                        border
                        border-slate-300
                        bg-white
                        py-4
                        font-medium
                        text-slate-700
                        transition
                        hover:bg-slate-100
                    "
                >

                    <BookOpen size={18} />

                    New Quiz

                </Link>

                <Link
                    to={"/mock-overview"}
                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-2xl
                        border
                        border-slate-300
                        bg-white
                        py-4
                        font-medium
                        text-slate-700
                        transition
                        hover:bg-slate-100
                    "
                >

                    <Home size={18} />

                    Mock Test

                </Link>

            </div>

        </div>

    );

}
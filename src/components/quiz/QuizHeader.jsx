import {
    BookOpen,
    CircleHelp,
    Layers3,
    LogOut
} from "lucide-react";
import { Link } from "react-router-dom";

export default function QuizHeader({
    topic,
    subTopic,
    difficulty
}) {

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

            {/* Header */}

            <div className="flex items-start justify-between">

                <div>

                    <span
                        className="
                            inline-flex
                            items-center
                            rounded-full
                            bg-blue-100
                            px-2.5
                            py-1
                            text-[11px]
                            font-semibold
                            uppercase
                            tracking-wide
                            text-blue-700
                        "
                    >
                        Review Mode
                    </span>

                    <h1
                        className="
                            mt-2
                            text-xl
                            font-bold
                            text-slate-900
                        "
                    >
                        Civil Service Reviewer
                    </h1>

                    <p
                        className="
                            mt-1
                            text-sm
                            text-slate-500
                        "
                    >
                        Answer carefully before submitting.
                    </p>

                </div>

                <Link
                    to="/review"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-300
                        px-3
                        py-2
                        text-sm
                        font-medium
                        text-slate-600
                        transition
                        hover:bg-slate-100
                        hover:text-red-600
                    "
                >

                    <LogOut size={16} />

                    Exit

                </Link>

            </div>

            {/* Information */}

            <div
                className="
                    mt-4
                    grid
                    gap-3
                    md:grid-cols-3
                "
            >

                {/* Topic */}

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-slate-50
                        px-3
                        py-2
                    "
                >

                    <BookOpen
                        size={18}
                        className="text-blue-600"
                    />

                    <div>

                        <p className="text-[11px] uppercase text-slate-500">

                            Topic

                        </p>

                        <p className="text-sm font-semibold text-slate-900">

                            {topic}

                        </p>

                    </div>

                </div>

                {/* Subtopic */}

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-slate-50
                        px-3
                        py-2
                    "
                >

                    <Layers3
                        size={18}
                        className="text-blue-600"
                    />

                    <div>

                        <p className="text-[11px] uppercase text-slate-500">

                            Subtopic

                        </p>

                        <p className="text-sm font-semibold text-slate-900">

                            {subTopic}

                        </p>

                    </div>

                </div>

                {/* Difficulty */}

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-slate-50
                        px-3
                        py-2
                    "
                >

                    <CircleHelp
                        size={18}
                        className="text-blue-600"
                    />

                    <div>

                        <p className="text-[11px] uppercase text-slate-500">

                            Difficulty

                        </p>

                        <p className="text-sm font-semibold text-slate-900">

                            {difficulty}

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}
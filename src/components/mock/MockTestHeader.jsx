import { Link } from "react-router-dom";
import {
    ClipboardCheck,
    Clock3,
    Target,
    LogOut,
} from "lucide-react";

export default function MockTestHeader({
    totalQuestions,
    duration,
}) {

    return (

        <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            {/* Top */}

            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                <div>

                    <span
                        className="
                            inline-flex
                            items-center
                            rounded-full
                            bg-amber-100
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            uppercase
                            tracking-wide
                            text-amber-700
                        "
                    >
                        Mock Examination
                    </span>

                    <h1
                        className="
                            mt-2
                            text-2xl
                            font-bold
                            text-slate-900
                        "
                    >
                        Civil Service Mock Test
                    </h1>

                    <p
                        className="
                            mt-1
                            text-sm
                            text-slate-500
                        "
                    >
                        Simulate the actual Civil Service Examination.
                        Answer all questions before the timer expires.
                    </p>

                </div>

                <Link

                    to="/mock-overview"

                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-300
                        px-4
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

                    Exit Exam

                </Link>

            </div>

            {/* Information Cards */}

            <div className="mt-5 grid gap-3 md:grid-cols-3">

                {/* Questions */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        bg-slate-50
                        px-4
                        py-3
                    "
                >

                    <ClipboardCheck
                        size={22}
                        className="text-blue-600"
                    />

                    <div>

                        <p className="text-xs uppercase text-slate-500">

                            Questions

                        </p>

                        <p className="font-semibold text-slate-900">

                            {totalQuestions} Items

                        </p>

                    </div>

                </div>

                {/* Time */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        bg-slate-50
                        px-4
                        py-3
                    "
                >

                    <Clock3
                        size={22}
                        className="text-blue-600"
                    />

                    <div>

                        <p className="text-xs uppercase text-slate-500">

                            Time Limit

                        </p>

                        <p className="font-semibold text-slate-900">

                            {duration} Minutes

                        </p>

                    </div>

                </div>

                {/* Passing */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        bg-slate-50
                        px-4
                        py-3
                    "
                >

                    <Target
                        size={22}
                        className="text-blue-600"
                    />

                    <div>

                        <p className="text-xs uppercase text-slate-500">

                            Goal

                        </p>

                        <p className="font-semibold text-slate-900">

                            Finish Before Time Ends

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}
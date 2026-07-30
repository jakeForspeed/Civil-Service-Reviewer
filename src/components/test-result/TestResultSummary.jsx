import {
    Target,
    CheckCircle2,
} from "lucide-react";

export default function TestResultSummary({

    result,

}) {

    const {

        correct,
        totalQuestions,
        percentage,
        passed,

    } = result;

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

            {/* Title */}

            <div className="flex items-center gap-3">

                <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-100
                    "
                >

                    <Target
                        size={22}
                        className="text-blue-600"
                    />

                </div>

                <div>

                    <h2 className="text-lg font-bold text-slate-900">

                        Examination Summary

                    </h2>

                    <p className="text-sm text-slate-500">

                        Overall performance

                    </p>

                </div>

            </div>

            {/* Score */}

            <div className="mt-8 text-center">

                <h3 className="text-5xl font-bold text-slate-900">

                    {correct}

                    <span className="text-2xl text-slate-400">

                        / {totalQuestions}

                    </span>

                </h3>

                <p className="mt-2 text-slate-500">

                    Correct Answers

                </p>

            </div>

            {/* Progress */}

            <div className="mt-8">

                <div className="mb-2 flex justify-between text-sm">

                    <span className="text-slate-500">

                        Accuracy

                    </span>

                    <span className="font-semibold text-slate-900">

                        {percentage}%

                    </span>

                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                    <div

                        className={`
                            h-full
                            rounded-full
                            transition-all
                            duration-700

                            ${
                                passed

                                    ? "bg-green-500"

                                    : "bg-red-500"

                            }
                        `}

                        style={{

                            width: `${percentage}%`

                        }}

                    />

                </div>

            </div>

            {/* Footer */}

            <div className="mt-8 rounded-2xl bg-slate-50 p-4">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-xs uppercase text-slate-500">

                            Passing Score

                        </p>

                        <p className="font-semibold text-slate-900">

                            80%

                        </p>

                    </div>

                    <div>

                        <span
                            className={`
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                px-4
                                py-2
                                text-sm
                                font-semibold

                                ${
                                    passed

                                        ? "bg-green-100 text-green-700"

                                        : "bg-red-100 text-red-700"

                                }
                            `}
                        >

                            <CheckCircle2 size={16} />

                            {

                                passed

                                    ? "Passed"

                                    : "Needs Improvement"

                            }

                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

}
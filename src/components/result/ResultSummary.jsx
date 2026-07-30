import { CheckCircle2, XCircle } from "lucide-react";

export default function ResultSummary({ summary }) {

    const passed = summary.passed;

    return (

        <div
            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
            "
        >

            <div className="text-center">

                <div
                    className={`
                        mx-auto
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full

                        ${
                            passed
                                ? "bg-green-100"
                                : "bg-red-100"
                        }
                    `}
                >

                    {
                        passed
                            ? (
                                <CheckCircle2
                                    size={32}
                                    className="text-green-600"
                                />
                            )
                            : (
                                <XCircle
                                    size={32}
                                    className="text-red-600"
                                />
                            )
                    }

                </div>

                <h2
                    className="
                        mt-5
                        text-6xl
                        font-bold
                        text-slate-900
                    "
                >

                    {summary.percentage}%

                </h2>

                <p
                    className="
                        mt-2
                        text-lg
                        text-slate-500
                    "
                >

                    {summary.score} / {summary.totalQuestions} Correct Answers

                </p>

            </div>

        </div>

    );

}
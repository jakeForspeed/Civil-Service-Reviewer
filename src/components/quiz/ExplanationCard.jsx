import {
    CheckCircle2,
    XCircle,
    Lightbulb
} from "lucide-react";

export default function ExplanationCard({ result }) {

    if (!result) return null;

    const isCorrect = result.isCorrect;

    return (

        <div
            className={`
                mb-5
                rounded-2xl
                border
                p-4
                shadow-sm

                ${
                    isCorrect
                        ? "border-green-200 bg-green-50"
                        : "border-red-200 bg-red-50"
                }
            `}
        >

            {/* Result */}

            <div className="flex items-center gap-3">

                {
                    isCorrect ? (

                        <CheckCircle2
                            size={22}
                            className="text-green-600"
                        />

                    ) : (

                        <XCircle
                            size={22}
                            className="text-red-600"
                        />

                    )
                }

                <div>

                    <h2
                        className={`
                            text-lg
                            font-semibold

                            ${
                                isCorrect
                                    ? "text-green-700"
                                    : "text-red-700"
                            }
                        `}
                    >

                        {isCorrect ? "Correct!" : "Incorrect"}

                    </h2>

                    <p className="text-xs text-slate-600">

                        {
                            isCorrect
                                ? "Great job! Keep it up."
                                : "Read the explanation below."
                        }

                    </p>

                </div>

            </div>

            {/* Explanation */}

            <div className="mt-4 flex gap-3">

                <div
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-100
                        shrink-0
                    "
                >

                    <Lightbulb
                        size={18}
                        className="text-blue-600"
                    />

                </div>

                <div>

                    <h3
                        className="
                            text-sm
                            font-semibold
                            text-slate-900
                        "
                    >

                        Explanation

                    </h3>

                    <p
                        className="
                            mt-1
                            text-sm
                            leading-7
                            text-slate-700
                        "
                    >

                        {result.explanation}

                    </p>

                </div>

            </div>

        </div>

    );

}
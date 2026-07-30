import { HelpCircle } from "lucide-react";

export default function QuestionCard({
    question,
    currentQuestion,
    totalQuestions
}) {

    if (!question) return null;

    return (

        <div
            className="
                mb-5
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
            "
        >

            {/* Header */}

            <div
                className="
                    flex
                    items-center
                    gap-3
                    border-b
                    border-slate-200
                    px-5
                    py-4
                "
            >

                <div
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-100
                        text-blue-600
                    "
                >

                    <HelpCircle size={20} />

                </div>

                <div>

                    <p
                        className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-wide
                            text-blue-600
                        "
                    >
                        Question {currentQuestion} of {totalQuestions}
                    </p>

                    <p
                        className="
                            text-sm
                            text-slate-500
                        "
                    >
                        Select the best answer.
                    </p>

                </div>

            </div>

            {/* Question */}

            <div className="px-5 py-6">

                <p
                    className="
                        text-xl
                        font-semibold
                        leading-9
                        text-slate-900
                    "
                >

                    {question.question}

                </p>

                <div
                    className="
                        mt-5
                        rounded-xl
                        bg-blue-50
                        px-4
                        py-3
                    "
                >

                    <p
                        className="
                            text-sm
                            text-blue-700
                        "
                    >

                        Choose the <strong>best</strong> answer from the options below.

                    </p>

                </div>

            </div>

        </div>

    );

}   
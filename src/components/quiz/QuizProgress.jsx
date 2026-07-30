export default function QuizProgress({
    currentQuestion,
    totalQuestions
}) {

    const progress =
        totalQuestions === 0
            ? 0
            : (currentQuestion / totalQuestions) * 100;

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

            <div className="flex items-center justify-between">

                <div>

                    <h3
                        className="
                            text-base
                            font-semibold
                            text-slate-900
                        "
                    >
                        Quiz Progress
                    </h3>

                    <p className="text-xs text-slate-500">
                        Keep going. You're making progress.
                    </p>

                </div>

                <div
                    className="
                        rounded-lg
                        bg-blue-50
                        px-3
                        py-1.5
                    "
                >

                    <span
                        className="
                            text-lg
                            font-bold
                            text-blue-700
                        "
                    >
                        {Math.round(progress)}%
                    </span>

                </div>

            </div>

            {/* Progress Bar */}

            <div
                className="
                    mt-4
                    h-2
                    overflow-hidden
                    rounded-full
                    bg-slate-200
                "
            >

                <div
                    className="
                        h-full
                        rounded-full
                        bg-blue-600
                        transition-all
                        duration-500
                    "
                    style={{
                        width: `${progress}%`
                    }}
                />

            </div>

        </div>

    );

}
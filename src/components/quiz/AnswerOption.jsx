import {
    CheckCircle2,
    Circle,
    XCircle
} from "lucide-react";

const LETTERS = ["A", "B", "C", "D"];

export default function AnswerOption({
    option,
    index,
    selectedAnswer,
    answerResult,
    onSelect
}) {

    const isSelected = selectedAnswer === index;

    const isSubmitted = !!answerResult;

    const isCorrect =
        isSubmitted &&
        answerResult.correctAnswer === index;

    const isWrong =
        isSubmitted &&
        isSelected &&
        !answerResult.isCorrect;

    let containerStyle =
        "border-slate-200 bg-white hover:border-blue-400";

    let badgeStyle =
        "bg-slate-100 text-slate-700";

    if (isSelected && !isSubmitted) {

        containerStyle =
            "border-blue-600 bg-blue-50";

        badgeStyle =
            "bg-blue-600 text-white";

    }

    if (isCorrect) {

        containerStyle =
            "border-green-600 bg-green-50";

        badgeStyle =
            "bg-green-600 text-white";

    }

    if (isWrong) {

        containerStyle =
            "border-red-600 bg-red-50";

        badgeStyle =
            "bg-red-600 text-white";

    }

    return (

        <button

            disabled={isSubmitted}

            onClick={() => onSelect(index)}

            className={`
                w-full
                rounded-2xl
                border-2
                px-4
                py-3
                text-left
                transition-all
                duration-200

                ${containerStyle}

                ${
                    isSubmitted
                        ? "cursor-default"
                        : "cursor-pointer"
                }
            `}
        >

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                    {/* Letter */}

                    <div
                        className={`
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            text-sm
                            font-bold

                            ${badgeStyle}
                        `}
                    >

                        {LETTERS[index]}

                    </div>

                    {/* Option */}

                    <div>

                        <p
                            className="
                                text-base
                                font-medium
                                text-slate-900
                            "
                        >

                            {option}

                        </p>

                        {isCorrect && (

                            <p className="text-xs text-green-700">

                                Correct Answer

                            </p>

                        )}

                        {isWrong && (

                            <p className="text-xs text-red-700">

                                Your Answer

                            </p>

                        )}

                    </div>

                </div>

                <div>

                    {isCorrect && (

                        <CheckCircle2
                            size={22}
                            className="text-green-600"
                        />

                    )}

                    {isWrong && (

                        <XCircle
                            size={22}
                            className="text-red-600"
                        />

                    )}

                    {!isSubmitted && isSelected && (

                        <Circle
                            size={18}
                            className="fill-blue-600 text-blue-600"
                        />

                    )}

                </div>

            </div>

        </button>

    );

}
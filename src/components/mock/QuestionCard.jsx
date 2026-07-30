import { memo } from "react";
import {
    CircleHelp,
    Tag,
} from "lucide-react";

function QuestionCard({

    question,

    selectedAnswer,

    onAnswer,

    questionNumber,

}) {

    const letters = ["A", "B", "C", "D"];

    return (

        <div
            className="
                mb-6
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
                overflow-hidden
            "
        >

            {/* Header */}

            <div
                className="
                    flex
                    flex-col
                    gap-3
                    border-b
                    border-slate-200
                    bg-slate-50
                    p-4
                    md:flex-row
                    md:items-center
                    md:justify-between
                "
            >

                <div className="flex items-center gap-3">

                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-100
                            font-bold
                            text-blue-700
                        "
                    >

                        {questionNumber}

                    </div>

                    <div>

                        <p className="text-sm font-semibold text-slate-900">

                            Question {questionNumber}

                        </p>

                        <p className="text-xs text-slate-500">

                            {question.id}

                        </p>

                    </div>

                </div>

                {

                    question.tags?.length > 0 && (

                        <div className="flex flex-wrap gap-2">

                            {

                                question.tags.map(tag => (

                                    <span

                                        key={tag}

                                        className="
                                            inline-flex
                                            items-center
                                            gap-1
                                            rounded-full
                                            bg-blue-50
                                            px-3
                                            py-1
                                            text-xs
                                            font-medium
                                            text-blue-700
                                        "

                                    >

                                        <Tag size={12} />

                                        {tag}

                                    </span>

                                ))

                            }

                        </div>

                    )

                }

            </div>

            {/* Question */}

            <div className="p-6">

                <div className="flex gap-3">

                    <CircleHelp
                        size={22}
                        className="mt-1 text-blue-600 shrink-0"
                    />

                    <p className="text-lg font-medium leading-7 text-slate-800">

                        {question.question}

                    </p>

                </div>

                {/* Options */}

                <div className="mt-6 space-y-3">

                    {

                        question.options.map((option, index) => {

                            const selected = selectedAnswer === index;

                            return (

                                <label

                                    key={index}

                                    className={`
                                        flex
                                        cursor-pointer
                                        items-center
                                        gap-4
                                        rounded-xl
                                        border
                                        p-4
                                        transition-all
                                        duration-200

                                        ${
                                            selected

                                                ? "border-blue-600 bg-blue-50"

                                                : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"

                                        }
                                    `}

                                >

                                    <input

                                        type="radio"

                                        name={question.id}

                                        checked={selected}

                                        onChange={() =>

                                            onAnswer(

                                                question.id,

                                                index

                                            )

                                        }

                                        className="hidden"

                                    />

                                    <div

                                        className={`
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            font-semibold

                                            ${
                                                selected

                                                    ? "bg-blue-600 text-white"

                                                    : "bg-slate-100 text-slate-600"

                                            }
                                        `}

                                    >

                                        {letters[index]}

                                    </div>

                                    <span
                                        className={`
                                            flex-1
                                            text-base

                                            ${
                                                selected

                                                    ? "font-semibold text-blue-700"

                                                    : "text-slate-700"

                                            }
                                        `}
                                    >

                                        {option}

                                    </span>

                                </label>

                            );

                        })

                    }

                </div>

            </div>

        </div>

    );

}

export default memo(QuestionCard);
import { useState } from "react";
import {
    ChevronDown,
    CheckCircle2,
    XCircle,
    Circle,
    CircleHelp,
    Lightbulb,
    Tag,
} from "lucide-react";

export default function ReviewAnswers({ exam = [] }) {

    const [openTopics, setOpenTopics] = useState({});
    const [openSubtopics, setOpenSubtopics] = useState({});

    function toggleTopic(topic) {

        setOpenTopics(prev => ({
            ...prev,
            [topic]: !prev[topic],
        }));

    }

    function toggleSubtopic(key) {

        setOpenSubtopics(prev => ({
            ...prev,
            [key]: !prev[key],
        }));

    }

    return (

        <div
            className="
                mt-6
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
            "
        >

            <h2
                className="
                    text-xl
                    font-bold
                    text-slate-900
                "
            >

                Review Answers

            </h2>

            <p className="mt-1 text-sm text-slate-500">

                Review every question, your answer, and the explanation.

            </p>

            <div className="mt-6 space-y-5">

                {

                    exam.map(topic => (

                        <div
                            key={topic.topic}
                            className="rounded-2xl border border-slate-200"
                        >

                            {/* Topic */}

                            <button

                                onClick={() => toggleTopic(topic.topic)}

                                className="
                                    flex
                                    w-full
                                    items-center
                                    justify-between
                                    p-5
                                    font-semibold
                                    hover:bg-slate-50
                                "

                            >

                                <span className="capitalize">

                                    {topic.topic}

                                </span>

                                <ChevronDown

                                    className={`transition-transform

                                        ${

                                            openTopics[topic.topic]

                                                ? "rotate-180"

                                                : ""

                                        }

                                    `}

                                />

                            </button>

                            {

                                openTopics[topic.topic] && (

                                    <div className="border-t border-slate-200">

                                        {

                                            topic.subtopics.map(subtopic => {

                                                const key = `${topic.topic}-${subtopic.name}`;

                                                return (

                                                    <div
                                                        key={subtopic.name}
                                                        className="border-b last:border-none"
                                                    >

                                                        {/* Subtopic */}

                                                        <button

                                                            onClick={() => toggleSubtopic(key)}

                                                            className="
                                                                flex
                                                                w-full
                                                                items-center
                                                                justify-between
                                                                bg-slate-50
                                                                px-6
                                                                py-4
                                                                font-medium
                                                            "

                                                        >

                                                            {subtopic.name}

                                                            <ChevronDown

                                                                className={`transition-transform

                                                                    ${

                                                                        openSubtopics[key]

                                                                            ? "rotate-180"

                                                                            : ""

                                                                    }

                                                                `}

                                                            />

                                                        </button>

                                                        {

                                                            openSubtopics[key] && (

                                                                <div className="space-y-5 p-6">

                                                                    {

                                                                        subtopic.questions.map(question => {

                                                                            let statusIcon;
                                                                            let badge;

                                                                            if (question.isCorrect) {

                                                                                statusIcon = <CheckCircle2 className="text-green-600" size={22} />;

                                                                                badge = "bg-green-100 text-green-700";

                                                                            }

                                                                            else if (question.userAnswer == null) {

                                                                                statusIcon = <Circle className="text-yellow-600" size={22} />;

                                                                                badge = "bg-yellow-100 text-yellow-700";

                                                                            }

                                                                            else {

                                                                                statusIcon = <XCircle className="text-red-600" size={22} />;

                                                                                badge = "bg-red-100 text-red-700";

                                                                            }

                                                                            return (

                                                                                <div

                                                                                    key={question.id}

                                                                                    className="
                                                                                        rounded-2xl
                                                                                        border
                                                                                        border-slate-200
                                                                                        bg-white
                                                                                        p-6
                                                                                    "

                                                                                >

                                                                                    {/* Header */}

                                                                                    <div className="flex items-start justify-between">

                                                                                        <div className="flex gap-3">

                                                                                            {statusIcon}

                                                                                            <div>

                                                                                                <h3 className="font-semibold text-slate-900">

                                                                                                    Question {question.examNumber}

                                                                                                </h3>

                                                                                                <p className="mt-2 text-slate-700">

                                                                                                    {question.question}

                                                                                                </p>

                                                                                            </div>

                                                                                        </div>

                                                                                        <span

                                                                                            className={`rounded-full px-3 py-1 text-xs font-semibold ${badge}`}

                                                                                        >

                                                                                            {

                                                                                                question.isCorrect

                                                                                                    ? "Correct"

                                                                                                    : question.userAnswer == null

                                                                                                        ? "Unanswered"

                                                                                                        : "Incorrect"

                                                                                            }

                                                                                        </span>

                                                                                    </div>

                                                                                    {/* Answers */}

                                                                                    <div className="mt-6 grid gap-4 md:grid-cols-2">

                                                                                        <div>

                                                                                            <p className="text-xs uppercase text-slate-500">

                                                                                                Your Answer

                                                                                            </p>

                                                                                            <p className="mt-2 rounded-xl bg-slate-50 p-3">

                                                                                                {

                                                                                                    question.userAnswer == null

                                                                                                        ? "No Answer"

                                                                                                        : question.options[question.userAnswer]

                                                                                                }

                                                                                            </p>

                                                                                        </div>

                                                                                        <div>

                                                                                            <p className="text-xs uppercase text-slate-500">

                                                                                                Correct Answer

                                                                                            </p>

                                                                                            <p className="mt-2 rounded-xl bg-green-50 p-3 font-medium text-green-700">

                                                                                                {

                                                                                                    question.options[question.correctAnswer]

                                                                                                }

                                                                                            </p>

                                                                                        </div>

                                                                                    </div>

                                                                                    {/* Explanation */}

                                                                                    <div className="mt-6 rounded-2xl bg-blue-50 p-5">

                                                                                        <div className="mb-2 flex items-center gap-2">

                                                                                            <Lightbulb

                                                                                                size={18}

                                                                                                className="text-blue-600"

                                                                                            />

                                                                                            <span className="font-semibold text-blue-700">

                                                                                                Explanation

                                                                                            </span>

                                                                                        </div>

                                                                                        <p className="leading-7 text-slate-700">

                                                                                            {question.explanation}

                                                                                        </p>

                                                                                    </div>

                                                                                    {/* Tags */}

                                                                                    {

                                                                                        question.tags?.length > 0 && (

                                                                                            <div className="mt-5 flex flex-wrap gap-2">

                                                                                                {

                                                                                                    question.tags.map(tag => (

                                                                                                        <span

                                                                                                            key={tag}

                                                                                                            className="
                                                                                                                inline-flex
                                                                                                                items-center
                                                                                                                gap-1
                                                                                                                rounded-full
                                                                                                                bg-slate-100
                                                                                                                px-3
                                                                                                                py-1
                                                                                                                text-xs
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

                                                                            );

                                                                        })

                                                                    }

                                                                </div>

                                                            )

                                                        }

                                                    </div>

                                                );

                                            })

                                        }

                                    </div>

                                )

                            }

                        </div>

                    ))

                }

            </div>

        </div>

    );

}
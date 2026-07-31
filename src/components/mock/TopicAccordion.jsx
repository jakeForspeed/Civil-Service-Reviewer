import { useMemo, useState } from "react";
import {
    ChevronDown,
    BookOpen,
    CheckCircle2,
    Circle,
} from "lucide-react";

import QuestionCard from "./QuestionCard";

export default function TopicAccordion({

    topic,

    answers,

    selectAnswer,

}) {

    const [openSubtopics, setOpenSubtopics] = useState(() =>
                Object.fromEntries(
                    topic.subtopics.map(subtopic => [subtopic.name, true])
                )
            );

    function toggle(name) {

        setOpenSubtopics(prev => ({

            ...prev,

            [name]: !prev[name],

        }));

    }

    /**
     * Topic Progress
     */

    const topicStats = useMemo(() => {

        let total = 0;
        let answered = 0;

        topic.subtopics.forEach(subtopic => {

            total += subtopic.questions.length;

            subtopic.questions.forEach(question => {

                if (answers[question.id] !== undefined) {

                    answered++;

                }

            });

        });

        return {

            total,

            answered,

            percentage: Math.round((answered / total) * 100),

        };

    }, [topic, answers]);

    return (

        <div className="mb-8">

            {/* Topic Header */}

            <div
                className="
                    mb-4
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    shadow-sm
                "
            >

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <BookOpen
                            size={24}
                            className="text-blue-600"
                        />

                        <div>

                            <h2 className="text-xl font-bold text-slate-900">

                                {topic.topic.toUpperCase()}

                            </h2>

                            <p className="text-sm text-slate-500">

                                {topicStats.answered} / {topicStats.total} Answered

                            </p>

                        </div>

                    </div>

                    <div className="text-right">

                        <p className="text-sm font-semibold text-blue-600">

                            {topicStats.percentage}%

                        </p>

                    </div>

                </div>

                {/* Progress */}

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">

                    <div

                        className="
                            h-full
                            rounded-full
                            bg-blue-600
                            transition-all
                            duration-300
                        "

                        style={{

                            width: `${topicStats.percentage}%`

                        }}

                    />

                </div>

            </div>

            {/* Subtopics */}

            {

                topic.subtopics.map(subtopic => {

                    const answered = subtopic.questions.filter(

                        q => answers[q.id] !== undefined

                    ).length;

                    const total = subtopic.questions.length;

                    const completed = answered === total;

                    return (

                        <div

                            key={subtopic.name}

                            className="
                                mb-4
                                overflow-hidden
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                shadow-sm
                            "

                        >

                            <button

                                onClick={() => toggle(subtopic.name)}

                                className="
                                    flex
                                    w-full
                                    items-center
                                    justify-between
                                    px-5
                                    py-4
                                    transition
                                    hover:bg-slate-50
                                "

                            >

                                <div className="flex items-center gap-3">

                                    {

                                        completed ? (

                                            <CheckCircle2

                                                size={20}

                                                className="text-green-600"

                                            />

                                        ) : (

                                            <Circle

                                                size={20}

                                                className="text-slate-400"

                                            />

                                        )

                                    }

                                    <div className="text-left">

                                        <p className="font-semibold text-slate-900">

                                            {subtopic.name}

                                        </p>

                                        <p className="text-sm text-slate-500">

                                            {answered} / {total} Answered

                                        </p>

                                    </div>

                                </div>

                                <ChevronDown

                                    size={20}

                                    className={`

                                        transition-transform

                                        duration-300

                                        ${

                                            openSubtopics[subtopic.name]

                                                ? "rotate-180"

                                                : ""

                                        }

                                    `}

                                />

                            </button>

                            {

                                openSubtopics[subtopic.name] && (

                                    <div className="border-t border-slate-200 bg-slate-50 p-5">

                                        {

                                            subtopic.questions.map((question, index) => (

                                                <QuestionCard

                                                    key={question.id}

                                                    question={question}

                                                    questionNumber={

                                                        question.examNumber ??

                                                        index + 1

                                                    }

                                                    selectedAnswer={

                                                        answers[question.id]

                                                    }

                                                    onAnswer={selectAnswer}

                                                />

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

    );

}
import {
    BookOpen,
    CheckCircle2,
    XCircle,
} from "lucide-react";

export default function TopicPerformance({ topics = [] }) {

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

            {/* Header */}

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

                    <BookOpen
                        size={22}
                        className="text-blue-600"
                    />

                </div>

                <div>

                    <h2
                        className="
                            text-lg
                            font-bold
                            text-slate-900
                        "
                    >

                        Topic Performance

                    </h2>

                    <p
                        className="
                            text-sm
                            text-slate-500
                        "
                    >

                        See how you performed in each topic.

                    </p>

                </div>

            </div>

            {/* Topics */}

            <div className="mt-8 space-y-6">

                {

                    topics.map(topic => {

                        const percentage = Math.round(

                            (topic.correct / topic.total) * 100

                        );

                        const passed = percentage >= 80;

                        return (

                            <div
                                key={topic.topic}
                                className="
                                    rounded-2xl
                                    border
                                    border-slate-100
                                    bg-slate-50
                                    p-5
                                "
                            >

                                {/* Top */}

                                <div className="flex items-center justify-between">

                                    <div>

                                        <h3
                                            className="
                                                text-lg
                                                font-semibold
                                                capitalize
                                                text-slate-900
                                            "
                                        >

                                            {topic.topic}

                                        </h3>

                                        <p
                                            className="
                                                text-sm
                                                text-slate-500
                                            "
                                        >

                                            {topic.correct} / {topic.total} Correct

                                        </p>

                                    </div>

                                    <div
                                        className={`
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            px-3
                                            py-1
                                            text-sm
                                            font-semibold

                                            ${
                                                passed
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                            }
                                        `}
                                    >

                                        {

                                            passed

                                                ? <CheckCircle2 size={16} />

                                                : <XCircle size={16} />

                                        }

                                        {percentage}%

                                    </div>

                                </div>

                                {/* Progress */}

                                <div className="mt-4">

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

                            </div>

                        );

                    })

                }

            </div>

        </div>

    );

}
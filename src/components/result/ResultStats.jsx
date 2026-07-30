import {
    CheckCircle2,
    XCircle,
    Gauge,
    Clock
} from "lucide-react";

export default function ResultStats({ summary }) {

    function formatDuration(seconds) {

        if (!seconds) return "0s";

        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;

        if (mins === 0) {
            return `${secs}s`;
        }

        return `${mins}m ${secs}s`;
    }

    const stats = [
        {
            title: "Correct",
            value: summary.correctAnswers,
            icon: CheckCircle2,
            color: "text-green-600",
            bg: "bg-green-100"
        },
        {
            title: "Incorrect",
            value: summary.incorrectAnswers,
            icon: XCircle,
            color: "text-red-600",
            bg: "bg-red-100"
        },
        {
            title: "Difficulty",
            value: summary.difficulty,
            icon: Gauge,
            color: "text-blue-600",
            bg: "bg-blue-100"
        },
        {
            title: "Time",
            value: formatDuration(summary.duration),
            icon: Clock,
            color: "text-amber-600",
            bg: "bg-amber-100"
        }
    ];

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

            <h3
                className="
                    mb-5
                    text-lg
                    font-bold
                    text-slate-900
                "
            >
                Quiz Statistics
            </h3>

            <div className="grid grid-cols-2 gap-4">

                {stats.map((stat) => {

                    const Icon = stat.icon;

                    return (

                        <div
                            key={stat.title}
                            className="
                                rounded-2xl
                                border
                                border-slate-100
                                bg-slate-50
                                p-4
                            "
                        >

                            <div className="flex items-center gap-3">

                                <div
                                    className={`
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-xl
                                        ${stat.bg}
                                    `}
                                >

                                    <Icon
                                        size={18}
                                        className={stat.color}
                                    />

                                </div>

                                <div>

                                    <p
                                        className="
                                            text-xs
                                            text-slate-500
                                        "
                                    >
                                        {stat.title}
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            font-bold
                                            text-slate-900
                                        "
                                    >
                                        {stat.value}
                                    </p>

                                </div>

                            </div>

                        </div>

                    );

                })}

            </div>

        </div>

    );

}
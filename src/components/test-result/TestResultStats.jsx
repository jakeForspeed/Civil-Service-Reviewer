import {
    CheckCircle2,
    XCircle,
    Circle,
    Clock3,
    Percent,
    ClipboardCheck,
} from "lucide-react";

export default function TestResultStats({ result }) {

    const {

        score,
        incorrect,
        unanswered,
        totalQuestions,
        percentage,
        timeUsed,

    } = result;

    function formatTime(seconds) {

        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        if (hrs > 0) {
            return `${hrs}h ${mins}m ${secs}s`;
        }

        return `${mins}m ${secs}s`;

    }

    const stats = [

        {
            title: "Correct",
            value: score,
            icon: CheckCircle2,
            color: "text-green-600",
            bg: "bg-green-100",
        },

        {
            title: "Incorrect",
            value: incorrect,
            icon: XCircle,
            color: "text-red-600",
            bg: "bg-red-100",
        },

        {
            title: "Unanswered",
            value: unanswered,
            icon: Circle,
            color: "text-yellow-600",
            bg: "bg-yellow-100",
        },

        {
            title: "Accuracy",
            value: `${percentage}%`,
            icon: Percent,
            color: "text-blue-600",
            bg: "bg-blue-100",
        },

        {
            title: "Time Used",
            value: formatTime(timeUsed),
            icon: Clock3,
            color: "text-purple-600",
            bg: "bg-purple-100",
        },

        {
            title: "Questions",
            value: totalQuestions,
            icon: ClipboardCheck,
            color: "text-slate-700",
            bg: "bg-slate-200",
        },

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

                Examination Statistics

            </h3>

            <div className="grid grid-cols-2 gap-4">

                {

                    stats.map(stat => {

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
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-xl
                                            ${stat.bg}
                                        `}

                                    >

                                        <Icon

                                            size={20}

                                            className={stat.color}

                                        />

                                    </div>

                                    <div>

                                        <p
                                            className="
                                                text-xs
                                                uppercase
                                                tracking-wide
                                                text-slate-500
                                            "
                                        >

                                            {stat.title}

                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-lg
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

                    })

                }

            </div>

        </div>

    );

}
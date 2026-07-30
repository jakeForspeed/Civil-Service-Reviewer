import {
    Clock3,
    CheckCircle2,
    BarChart3,
    CircleAlert,
} from "lucide-react";

function formatTime(seconds) {

    const hrs = Math.floor(seconds / 3600);

    const mins = Math.floor((seconds % 3600) / 60);

    const secs = seconds % 60;

    return [

        hrs,

        mins,

        secs,

    ]
        .map(value => String(value).padStart(2, "0"))
        .join(":");

}

export default function MockExamStats({

    timeRemaining,

    answered,

    total,

    onFinish,

}) {

    const progress = Math.round(

        (answered / total) * 100

    );

    const warning = timeRemaining <= 600;

    return (

        <div
            className="
                sticky
                top-4
                z-40
                mb-6
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-sm
            "
        >

            <div className="grid gap-4 lg:grid-cols-4">

                {/* Timer */}

                <div
                    className={`
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-4
                        py-3
                        ${
                            warning
                                ? "bg-red-50"
                                : "bg-slate-50"
                        }
                    `}
                >

                    <Clock3

                        size={22}

                        className={
                            warning
                                ? "text-red-600"
                                : "text-blue-600"
                        }

                    />

                    <div>

                        <p className="text-xs uppercase text-slate-500">

                            Time Remaining

                        </p>

                        <p
                            className={`text-lg font-bold ${
                                warning
                                    ? "text-red-600"
                                    : "text-slate-900"
                            }`}
                        >

                            {formatTime(timeRemaining)}

                        </p>

                    </div>

                </div>

                {/* Answered */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        bg-slate-50
                        px-4
                        py-3
                    "
                >

                    <CheckCircle2
                        size={22}
                        className="text-green-600"
                    />

                    <div>

                        <p className="text-xs uppercase text-slate-500">

                            Answered

                        </p>

                        <p className="text-lg font-bold text-slate-900">

                            {answered} / {total}

                        </p>

                    </div>

                </div>

                {/* Progress */}

                <div
                    className="
                        rounded-xl
                        bg-slate-50
                        px-4
                        py-3
                    "
                >

                    <div className="flex items-center gap-2">

                        <BarChart3
                            size={20}
                            className="text-blue-600"
                        />

                        <span className="text-xs uppercase text-slate-500">

                            Progress

                        </span>

                    </div>

                    <div className="mt-3">

                        <div className="flex justify-between text-sm font-semibold">

                            <span>{progress}%</span>

                            <span>{answered}/{total}</span>

                        </div>

                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">

                            <div
                                className="
                                    h-full
                                    rounded-full
                                    bg-blue-600
                                    transition-all
                                    duration-300
                                "
                                style={{
                                    width: `${progress}%`,
                                }}
                            />

                        </div>

                    </div>

                </div>

                {/* Finish */}

                <div
                    className="
                        flex
                        items-center
                        justify-center
                    "
                >

                    <button

                        onClick={onFinish}

                        className="
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-blue-600
                            px-6
                            py-4
                            font-semibold
                            text-white
                            transition
                            hover:bg-blue-700
                        "
                    >

                        <CircleAlert size={18} />

                        Finish Test

                    </button>

                </div>

            </div>

        </div>

    );

}
import { CheckCircle2, Gauge } from "lucide-react";

const difficultyStyles = {
    easy: {
        icon: "bg-green-100 text-green-600",
        border: "border-green-500",
        bg: "bg-green-50"
    },
    medium: {
        icon: "bg-yellow-100 text-yellow-600",
        border: "border-yellow-500",
        bg: "bg-yellow-50"
    },
    hard: {
        icon: "bg-orange-100 text-orange-600",
        border: "border-orange-500",
        bg: "bg-orange-50"
    },
    expert: {
        icon: "bg-red-100 text-red-600",
        border: "border-red-500",
        bg: "bg-red-50"
    }
};

export default function DifficultyCard({
    difficulty,
    selected = false,
    onClick
}) {

    const style =
        difficultyStyles[difficulty.id] ??
        difficultyStyles.easy;

    return (

        <button
            onClick={onClick}
            className={`
                group
                relative
                flex
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                p-4
                text-center
                transition-all
                duration-300

                ${
                    selected
                        ? `${style.border} ${style.bg} shadow-lg`
                        : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                }
            `}
        >

            {selected && (

                <CheckCircle2
                    size={22}
                    className="absolute right-4 top-4 text-blue-600"
                />

            )}

            <div
                className={`
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-2xl

                    ${style.icon}
                `}
            >

                <Gauge size={30} />

            </div>

            <h3 className="mt-3 text-xl font-bold text-slate-900">

                {difficulty.name}

            </h3>

        </button>

    );

}
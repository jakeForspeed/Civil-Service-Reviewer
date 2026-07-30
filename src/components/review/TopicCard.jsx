import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function TopicCard({
    topic,
    selected = false,
    onClick
}) {

    return (

        <button
            onClick={onClick}
            className={`
                group
                relative
                flex
                items-center
                gap-4
                rounded-3xl
                border
                px-5
                py-5
                text-left
                transition-all
                duration-300

                ${
                    selected
                        ? "border-blue-600 bg-blue-50 shadow-md"
                        : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                }
            `}
        >

            {/* Selected */}

            {

                selected && (

                    <CheckCircle2
                        size={20}
                        className="absolute right-4 top-4 text-blue-600"
                    />

                )

            }

            {/* Icon */}

            <div
                className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    text-2xl

                    ${
                        selected
                            ? "bg-blue-600 text-white"
                            : "bg-blue-100"
                    }
                `}
            >

                {topic.icon}

            </div>

            {/* Content */}

            <div className="flex-1">

                <h3 className="text-lg font-bold text-slate-900">

                    {topic.name}

                </h3>

                <p className="mt-1 text-sm text-slate-500">

                    {topic.description}

                </p>

            </div>

            {/* Arrow */}

            <ArrowRight
                size={20}
                className={`
                    transition-transform
                    duration-300

                    ${
                        selected
                            ? "text-blue-600"
                            : "text-slate-400 group-hover:translate-x-1"
                    }
                `}
            />

        </button>

    );

}
import {
    ArrowRight,
    CheckCircle2
} from "lucide-react";

export default function SubTopicCard({
    subTopic,
    selected = false,
    onClick
}) {

    return (

        <button
            onClick={onClick}
            className={`
                group
                flex
                w-full
                items-center
                justify-between
                rounded-2xl
                border
                px-5
                py-4
                transition-all
                duration-300

                ${
                    selected
                        ? "border-blue-600 bg-blue-50 shadow-sm"
                        : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                }
            `}
        >

            <span
                className="
                    text-base
                    font-semibold
                    text-slate-900
                "
            >

                {subTopic.name}

            </span>

            {

                selected
                    ? (

                        <CheckCircle2
                            size={20}
                            className="text-blue-600"
                        />

                    )
                    : (

                        <ArrowRight
                            size={18}
                            className="
                                text-slate-400
                                transition-transform
                                group-hover:translate-x-1
                            "
                        />

                    )

            }

        </button>

    );

}
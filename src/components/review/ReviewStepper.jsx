import { Check, BookOpen, List, Gauge } from "lucide-react";

const STEPS = [
    {
        number: 1,
        title: "Topic",
        icon: BookOpen,
    },
    {
        number: 2,
        title: "Subtopic",
        icon: List,
    },
    {
        number: 3,
        title: "Difficulty",
        icon: Gauge,
    },
];

export default function ReviewStepper({ currentStep }) {
    return (
        <div
            className="
                sticky
                top-4
                z-20
                mb-6
            "
        >
            <div
                className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/95
                    px-6
                    py-4
                    shadow-sm
                    backdrop-blur
                "
            >
                <div className="mx-auto flex max-w-2xl items-center">

                    {STEPS.map((step, index) => {

                        const Icon = step.icon;

                        const completed = currentStep > step.number;
                        const active = currentStep === step.number;

                        return (

                            <div
                                key={step.number}
                                className="flex flex-1 items-center"
                            >

                                {/* Step */}

                                <div className="flex flex-col items-center">

                                    <div
                                        className={`
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            transition-all

                                            ${
                                                completed
                                                    ? "border-green-600 bg-green-600 text-white"
                                                    : active
                                                    ? "border-blue-600 bg-blue-600 text-white"
                                                    : "border-slate-300 bg-white text-slate-400"
                                            }
                                        `}
                                    >

                                        {completed
                                            ? <Check size={16} />
                                            : <Icon size={16} />}

                                    </div>

                                    <span
                                        className={`
                                            mt-2
                                            text-xs
                                            font-medium

                                            ${
                                                completed
                                                    ? "text-green-600"
                                                    : active
                                                    ? "text-blue-600"
                                                    : "text-slate-500"
                                            }
                                        `}
                                    >
                                        {step.title}
                                    </span>

                                </div>

                                {/* Connector */}

                                {index < STEPS.length - 1 && (

                                    <div className="mx-3 flex-1">

                                        <div
                                            className={`
                                                h-0.5
                                                rounded-full
                                                transition-all

                                                ${
                                                    completed
                                                        ? "bg-green-600"
                                                        : "bg-slate-200"
                                                }
                                            `}
                                        />

                                    </div>

                                )}

                            </div>

                        );

                    })}

                </div>

            </div>

        </div>
    );
}
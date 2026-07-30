import { ArrowLeft, ArrowRight, Play } from "lucide-react";

export default function StepNavigation({
    currentStep,
    totalSteps = 3,
    canContinue = false,
    onBack,
    onNext,
    onFinish,
}) {

    const isLastStep = currentStep === totalSteps;

    return (

        <div
            className="
                sticky
                bottom-0
                border-t
                border-slate-200
                bg-white/95
                px-8
                py-5
                backdrop-blur
                rounded-2xl
            "
        >

            <div className="flex items-center justify-between">

                <button
                    onClick={onBack}
                    disabled={currentStep === 1}
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-300
                        px-6
                        py-3
                        font-medium
                        text-slate-700
                        transition
                        hover:bg-slate-100
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                    "
                >
                    <ArrowLeft size={18} />
                    Back
                </button>

                {!isLastStep ? (

                    <button
                        onClick={onNext}
                        disabled={!canContinue}
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-blue-600
                            px-6
                            py-3
                            font-semibold
                            text-white
                            transition
                            hover:bg-blue-700
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        Continue
                        <ArrowRight size={18} />
                    </button>

                ) : (

                    <button
                        onClick={onFinish}
                        disabled={!canContinue}
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-green-600
                            px-6
                            py-3
                            font-semibold
                            text-white
                            transition
                            hover:bg-green-700
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        <Play size={18} />
                        Start Review
                    </button>

                )}

            </div>

        </div>

    );

}
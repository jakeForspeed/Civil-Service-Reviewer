import Timer from "./Timer";
import ProgressBar from "./ProgressBar";
import FinishButton from "./FinishButton";

export default function ExamHeader({

    timeRemaining,

    answered,

    total,

    onFinish

}) {

    return (

        <header
            className="
                sticky
                top-0
                z-50
                bg-white
                border-b
                shadow-sm
            "
        >

            <div className="max-w-7xl mx-auto p-4">

                <h1 className="text-2xl font-bold mb-4">

                    CSC Mock Examination

                </h1>

                <div className="flex items-center justify-between gap-6">

                    <Timer

                        timeRemaining={timeRemaining}

                    />

                    <ProgressBar

                        answered={answered}

                        total={total}

                    />

                    <FinishButton

                        answered={answered}

                        total={total}

                        onFinish={onFinish}

                    />

                </div>

            </div>

        </header>

    );

}
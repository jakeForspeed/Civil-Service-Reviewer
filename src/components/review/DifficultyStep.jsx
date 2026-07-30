import { ArrowLeft, Play } from "lucide-react";
import DifficultyCard from "./DifficultyCard";

export default function DifficultyStep({
    difficulties,
    selectedDifficulty,
    onSelectDifficulty,
    onBack,
    onStartReview
}) {

    return (

        <div className="min-w-full flex flex-col mb-5">

            {/* Header */}

            <div className="mb-8">

                <h2 className="text-3xl font-bold text-slate-900">

                    Choose Difficulty

                </h2>

                <p className="mt-2 text-slate-600">

                    Select the challenge level for your review session.

                </p>

            </div>

            {/* Cards */}

            <div className=" mx-auto grid w-full max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4" >

                {

                    difficulties.map((difficulty) => (

                        <DifficultyCard
                            key={difficulty.id}
                            difficulty={difficulty}
                            selected={selectedDifficulty?.id === difficulty.id}
                            onClick={() => onSelectDifficulty(difficulty)}
                        />

                    ))

                }

            </div>

            {/* Footer */}


        </div>

    );

}
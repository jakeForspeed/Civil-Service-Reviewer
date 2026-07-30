import { useMemo, useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";


import ReviewHeader from "../components/review/ReviewHeader";
import ReviewStepper from "../components/review/ReviewStepper";

import TopicStep from "../components/review/TopicStep";
import SubTopicStep from "../components/review/SubTopicStep";
import DifficultyStep from "../components/review/DifficultyStep";
import StepNavigation from "../components/review/StepNavigation";


import {
  getTopics,
  getSubTopics,
  getDifficultyLevels
} from "../services/reviewService";



export default function Review() {

    const navigate = useNavigate();

    const topics = getTopics();

    const difficulties = getDifficultyLevels();

    const [currentStep, setCurrentStep] = useState(1);

    const [selectedTopic, setSelectedTopic] = useState(null);

    const [selectedSubTopic, setSelectedSubTopic] = useState(null);

    const [selectedDifficulty, setSelectedDifficulty] = useState(null);

    const subTopics = useMemo(() => {

        if (!selectedTopic) return [];

        return getSubTopics(selectedTopic.id);

    }, [selectedTopic]);

    const nextStep = () => {

        setCurrentStep((step) => Math.min(step + 1, 3));

    };

    const previousStep = () => {

        setCurrentStep((step) => Math.max(step - 1, 1));

    };

    function startReview() {

        navigate("/quiz", {
            state: {
                topicId: selectedTopic.id,
                subTopicId: selectedSubTopic.id,
                difficulty: selectedDifficulty.id,
            },
        });

    }

    return (

        <div className="flex flex-1 items-center justify-center">

            <div className="w-full max-w-5xl">

                <ReviewHeader />

                <ReviewStepper
                    currentStep={currentStep}
                />

                <div className="mt-8rounded-3xlborderborder-slate-200bg-whitep-8shadow-lg">
                    {
                        currentStep === 1 && (
                            <TopicStep
                                topics={topics}
                                selectedTopic={selectedTopic}
                                onSelectTopic={setSelectedTopic}
                                onNext={nextStep}
                            />
                        )
                    }
                    {
                        currentStep === 2 && (
                            <SubTopicStep
                                subTopics={subTopics}
                                selectedSubTopic={selectedSubTopic}
                                onSelectSubTopic={setSelectedSubTopic}
                            />

                        )

                    }
                    {
                        currentStep === 3 && (
                            <DifficultyStep
                                difficulties={difficulties}
                                selectedDifficulty={selectedDifficulty}
                                onSelectDifficulty={setSelectedDifficulty}
                            />
                        )

                    }

                </div>

                <StepNavigation
                    currentStep={currentStep}
                    canContinue={
                        currentStep === 1
                            ? !!selectedTopic
                            : currentStep === 2
                            ? !!selectedSubTopic
                            : !!selectedDifficulty
                    }
                    onBack={previousStep}
                    onNext={nextStep}
                    onFinish={startReview}
                />

            </div>

        </div>

    );

}
import { ArrowLeft, ArrowRight } from "lucide-react";
import SubTopicCard from "./SubTopicCard";

export default function SubTopicStep({
    subTopics,
    selectedSubTopic,
    onSelectSubTopic,
    onBack,
    onNext
}) {

    return (

        <div className="min-w-full flex flex-col mb-5">

            {/* Header */}

            <div className="mb-8">

                <h2 className="text-3xl font-bold text-slate-900">

                    Choose a Subtopic

                </h2>

                <p className="mt-2 text-slate-600">

                    Select the specific lesson you'd like to practice.

                </p>

            </div>

            {/* Cards */}

            <div
    className="
        mx-auto
        flex
        w-full
        max-w-3xl
        flex-col
        gap-3
    "
>

                {

                    subTopics.map((subTopic) => (

                        <SubTopicCard
                            key={subTopic.id}
                            subTopic={subTopic}
                            selected={selectedSubTopic?.id === subTopic.id}
                            onClick={() => onSelectSubTopic(subTopic)}
                        />

                    ))

                }

            </div>


        </div>

    );

}
import TopicCard from "./TopicCard";

export default function TopicStep({
    topics,
    selectedTopic,
    onSelectTopic
}) {

    return (

        <div className="min-w-full mb-5">

            {/* Heading */}

            <div className="mb-8">

                <h2 className="text-3xl font-bold text-slate-900">

                    Choose a Topic

                </h2>

                <p className="mt-2 text-slate-600">

                    Select the subject you would like to review.

                </p>

            </div>

            {/* Topic Grid */}

            <div
    className="
        mx-auto
        grid
        w-full
        max-w-4xl
        gap-4
        md:grid-cols-2
    "
>
                {

                    topics.map((topic) => (

                        <TopicCard
                            key={topic.id}
                            topic={topic}
                            selected={selectedTopic?.id === topic.id}
                            onClick={() => onSelectTopic(topic)}
                        />

                    ))

                }

            </div>

        </div>

    );

}
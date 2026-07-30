import { Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

import ResultSummary from "./ResultSummary";
import ResultStats from "./ResultStats";
import ResultActions from "./ResultActions";

export default function Result({ summary }) {

    const navigate = useNavigate();

    if (!summary) return null;

    function retryQuiz() {

        navigate("/quiz", {
            state: {
                topicId: summary.topic,
                subTopicId: summary.subTopic,
                difficulty: summary.difficulty
            }
        });

    }

    return (

        <div className="flex flex-1 flex-col justify-center">

            {/* Header */}

            <div className="mb-8 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">

                    <Trophy
                        size={30}
                        className="text-blue-600"
                    />

                </div>

                <h1 className="mt-4 text-3xl font-bold text-slate-900">

                    Quiz Completed

                </h1>

                <p className="mt-2 text-slate-500">

                    Great job! Here's your result.

                </p>

            </div>

            {/* Content */}

            <div className="grid gap-6 lg:grid-cols-2">

                <ResultSummary summary={summary} />

                <ResultStats summary={summary} />

            </div>

            <div className="mt-6">

                <ResultActions

                    onRetry={retryQuiz}

                    onNewQuiz={() => navigate("/review")}

                    onHome={() => navigate("/")}

                />

            </div>

        </div>

    );

}
import { Trophy } from "lucide-react";
import {
    useNavigate,
    useLocation,
    Navigate
} from "react-router-dom";

import ResultSummary from "../components/result/ResultSummary";
import ResultStats from "../components/result/ResultStats";
import ResultActions from "../components/result/ResultActions";

export default function Result() {

    const navigate = useNavigate();
    const { state } = useLocation();

    const summary = state?.summary;

    // Prevent opening /result directly
    if (!summary) {
        return <Navigate to="/" replace />;
    }

    function retryQuiz() {

        navigate("/quiz", {
            replace: true,
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

            {/* Summary + Statistics */}

            <div className="grid gap-6 lg:grid-cols-2">

                <ResultSummary summary={summary} />

                <ResultStats summary={summary} />

            </div>

            {/* Actions */}

            <div className="mt-6">

                <ResultActions
                    onRetry={retryQuiz}
                />

            </div>

        </div>

    );

}
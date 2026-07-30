// src/pages/TestResult.jsx

import { useLocation, Navigate, useNavigate } from "react-router-dom";

import ResultSummary from "../components/test-result/ResultSummary";
import TopicBreakdown from "../components/test-result/TopicBreakdown";
import ReviewAnswers from "../components/test-result/ReviewAnswers";
import ResultActions from "../components/test-result/ResultActions";

import TestResultHeader from "../components/test-result/TestResultHeader";
import TestResultStats from "../components/test-result/TestResultStats";
import TestResultSummary from "../components/test-result/TestResultSummary";
import TopicPerformance from "../components/test-result/TopicPerformance";

import { clearTest } from "../services/storage";

export default function TestResult() {

    const location = useLocation();
    const navigate = useNavigate();

    const result = location.state;

    if (!result) {

        return <Navigate to="/mock-overview" replace />;

    }

    function handleRetry() {

        // remove saved exam
        clearTest();

        // go back to mock test
        navigate("/mock-test", {
            replace: true
        });

    }


    return (

        <div className="flex flex-col">

            <TestResultHeader
                percentage={result.percentage}
                passed={result.passed}
            />

            <div className="grid gap-6 lg:grid-cols-2">

                <TestResultSummary
                    result={result}
                />

                <TestResultStats
                    result={result}
                />

            </div>

            <TopicPerformance
                topics={result.topics}
            />

            <ReviewAnswers
                exam={result.exam}
            />

            <ResultActions
                onRetry={handleRetry}
            />

        </div>

    );

}
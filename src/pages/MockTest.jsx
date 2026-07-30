import useTest from "../hooks/useTest";

import MockTestHeader from "../components/mock/MockTestHeader";
import ExamHeader from "../components/mock/ExamHeader";
import MockExamStats from "../components/mock/MockExamStats";

import TopicAccordion from "../components/mock/TopicAccordion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MockTest() {

    const navigate = useNavigate();

    const {

        exam,

        answers,

        selectAnswer,

        submitTest,

        result,

        timeRemaining,

        answeredCount,

        totalQuestions

    } = useTest();

    if (result) {

        // later we'll navigate to Result Page

    }

    useEffect(() => {

        if (result) {

            navigate("/test-result", {

                replace: true,

                state: result

            });

        }

}, [result, navigate]);

// useEffect(() => {
//     console.log("MockTest mounted");
//     return () => {
//         console.log("MockTest unmounted");
//     };
// }, []);

    return (

        <div>

            <MockTestHeader
                totalQuestions={totalQuestions}
                duration={110}
            />

            <MockExamStats
                timeRemaining={timeRemaining}
                answered={answeredCount}
                total={totalQuestions}
                onFinish={submitTest}
            />

            <div className="max-w-7xl mx-auto p-6">
            {
                exam.map(topic => (
                    <TopicAccordion
                        key={topic.topic}
                        topic={topic}
                        answers={answers}
                        selectAnswer={selectAnswer}
                    />
                ))
            }
          </div>

        </div>

    );

}
import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/quiz/Loading";
import QuizHeader from "../components/quiz/QuizHeader";
import QuizProgress from "../components/quiz/QuizProgress";
import QuestionCard from "../components/quiz/QuestionCard";
import AnswerList from "../components/quiz/AnswerList";
import ExplanationCard from "../components/quiz/ExplanationCard";
import QuizNavigation from "../components/quiz/QuizNavigation";


import useQuiz from "../hooks/useQuiz";

const Quiz = () => {

    const navigate = useNavigate();

    const { state } = useLocation();

    if (!state) {
        return <Navigate to="/review" replace />;
    }

    const {
        // quiz state
        question,
        currentQuestion,
        totalQuestions,
        selectedAnswer,
        answerResult,
        finished,
        summary,
        // actions
        selectAnswer,
        submitAnswer,
        nextQuestion,
        previousQuestion
    } = useQuiz({
        topic: state.topicId,
        subTopic: state.subTopicId,
        difficulty: state.difficulty
    });

    useEffect(() => {
        if (finished && summary) {
            navigate("/result", {
                replace: true,
                state: { summary }
            });
        }
    }, [finished, summary, navigate]);

    if (!question) {

        return (<Loading />);
    }
    
  return (
    <div className="flex h-full flex-col">

      {/* Header */}
      <QuizHeader
          topic={state.topicId}
          subTopic={state.subTopicId}
          difficulty={state.difficulty}
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
      />

      {/* Progress */}
      <QuizProgress
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
      />

      {/* Question */}
      <QuestionCard
          question={question}
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
      />

      {/* Answers */}

      <AnswerList
          options={question.options}
          selectedAnswer={selectedAnswer}
          answerResult={answerResult}
          onSelect={selectAnswer}
      />

      {/* Explanation */}

      <ExplanationCard
          result={answerResult}
      />

      {/* Navigation */}

      <QuizNavigation
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
          selectedAnswer={selectedAnswer}
          answerResult={answerResult}
          onPrevious={previousQuestion}
          onSubmit={submitAnswer}
          onNext={nextQuestion}
      />

    </div>
  )
}

export default Quiz
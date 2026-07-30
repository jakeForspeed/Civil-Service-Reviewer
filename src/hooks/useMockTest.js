import { useEffect, useRef, useState } from "react";

import MockTestEngine from "../services/mockTestEngine";
import { generateMockQuestions } from "../services/mockService";

const EXAM_DURATION = 100 * 60; // 60 minutes

export default function useMockQuiz() {

    const engine = useRef(new MockTestEngine());

    const [loading, setLoading] = useState(true);
    const [question, setQuestion] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(EXAM_DURATION);
    const [finished, setFinished] = useState(false);
    const [summary, setSummary] = useState(null);

    useEffect(() => {

        async function loadQuiz() {

            const questions = await generateMockQuestions(100);

            engine.current.initialize(questions);
            updateScreen();
            setLoading(false);
        }

        loadQuiz();

    }, []);

    useEffect(() => {

        if (loading || finished) return;

        const timer = setInterval(() => {

            setTimeRemaining((time) => {

                if (time <= 1) {
                    clearInterval(timer);
                    submitExam();
                    return 0;
                }
                return time - 1;
            });
        }, 1000);

        return () => clearInterval(timer);

    }, [loading, finished]);

    function updateScreen() {

        const current = engine.current.getCurrentQuestion();

        setQuestion(current);
        setCurrentQuestion( engine.current.getCurrentNumber() );
        setTotalQuestions( engine.current.getTotalQuestions() );
        setSelectedAnswer( engine.current.answers[ engine.current.currentIndex ] );
    }

    function selectAnswer(answer) {

        engine.current.selectAnswer(answer);
        setSelectedAnswer(answer);
    }

    function nextQuestion() {

        engine.current.next();
        updateScreen();
    }

    function previousQuestion() {

        engine.current.previous();
        updateScreen();
    }

    function submitExam() {

        const result = engine.current.finish();

        setSummary(result);
        setFinished(true);
    }

    return {

        loading,
        question,
        currentQuestion,
        totalQuestions,
        selectedAnswer,
        timeRemaining,
        finished,
        summary,

        selectAnswer,
        nextQuestion,
        previousQuestion,
        submitExam

    };
}
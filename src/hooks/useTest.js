// src/hooks/useTest.js

import { useEffect, useRef, useState } from "react";

import {
    createMockTest,
    answerQuestion,
    finishTest,
} from "../services/testEngine";

import {
    saveTest,
    loadTest,
    clearTest,
} from "../services/storage";

const EXAM_DURATION = 2 * 60; // Change to 110 * 60 for production

export default function useTest(config = {}) {

    /**
     * Restore saved exam
     */
    const savedTest = loadTest();

    /**
     * Generate exam only once
     */
    const examRef = useRef(
        savedTest?.exam ?? createMockTest(config)
    );

    /**
     * Answers
     */
    const [answers, setAnswers] = useState(
        savedTest?.answers ?? {}
    );

    /**
     * Keep the latest answers for the timer.
     * This avoids stale state when time expires.
     */
    const answersRef = useRef(
        savedTest?.answers ?? {}
    );

    useEffect(() => {

        answersRef.current = answers;

    }, [answers]);

    /**
     * Timer
     */
    const [timeRemaining, setTimeRemaining] = useState(
        savedTest?.timeRemaining ?? EXAM_DURATION
    );

    /**
     * Result
     */
    const [result, setResult] = useState(null);

    /**
     * Has the exam been submitted?
     */
    const [submitted, setSubmitted] = useState(false);

    /**
     * Answer a question
     */
    function selectAnswer(questionId, selectedAnswer) {

        setAnswers(prev => {

            const updated = { ...prev };

            answerQuestion(
                updated,
                questionId,
                selectedAnswer
            );

            return updated;

        });

    }

    /**
     * Submit the exam
     */
    function submitTest() {

        if (submitted) return;

        const finalResult = finishTest(

            examRef.current,
            answersRef.current,
            {
                timeRemaining,
                examDuration: EXAM_DURATION,
            }
        );

        clearTest();

        setSubmitted(true);

        setResult(finalResult);

    }

    /**
     * Countdown
     */
    useEffect(() => {

        if (submitted) return;

        const interval = setInterval(() => {

            setTimeRemaining(prev => {

                return Math.max(prev - 1, 0);

            });

        }, 1000);

        return () => clearInterval(interval);

    }, [submitted]);

    /**
     * Automatically submit when timer reaches zero
     */
    useEffect(() => {

        if (submitted) return;

        if (timeRemaining === 0) {

            submitTest();

        }

    }, [timeRemaining, submitted]);

    /**
     * Save progress whenever answers or timer change
     */
    useEffect(() => {

        if (submitted) return;

        saveTest({

            exam: examRef.current,

            answers,

            timeRemaining,

            startedAt:

                savedTest?.startedAt ??

                Date.now(),

        });

    }, [

        answers,

        timeRemaining,

        submitted,

        savedTest,

    ]);

    /**
     * Total Questions
     */
    const totalQuestions = examRef.current.reduce(

        (total, topic) =>

            total +

            topic.subtopics.reduce(

                (subtotal, subtopic) =>

                    subtotal +

                    subtopic.questions.length,

                0

            ),

        0

    );

    /**
     * Answered Questions
     */
    const answeredCount = Object.keys(answers).length;

    return {

        exam: examRef.current,

        answers,

        selectAnswer,

        submitTest,

        result,

        submitted,

        timeRemaining,

        answeredCount,

        totalQuestions,

    };

}
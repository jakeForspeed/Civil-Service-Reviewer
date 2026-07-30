import { useCallback, useEffect, useRef, useState } from "react";
import QuizEngine from "../services/quizEngine";

export default function useQuiz({topic, subTopic, difficulty}){

    const engineRef = useRef(null);

    const [question, setQuestion] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answerResult, setAnswerResult] = useState(null);
    const [canGoNext, setCanGoNext] = useState(false);

    const [finished, setFinished] = useState(false);
    const [summary, setSummary] = useState(null);


    const syncState = useCallback(() => {

        const engine = engineRef.current;

        if (!engine) return;

        setQuestion(engine.getCurrentQuestion());

        setCurrentQuestion(engine.getCurrentNumber());

        setTotalQuestions(engine.getTotalQuestions());

        setSelectedAnswer(engine.getSelectedAnswer());

        setAnswerResult(engine.getCurrentAnswer());

        setCanGoNext(engine.canGoNext());

        setFinished( engine.isFinished() );

    }, []);


    const initializeQuiz = useCallback( async () => {

        const engine = new QuizEngine({topic, subTopic, difficulty});
        await engine.initialize();
        engineRef.current = engine;

        syncState();

    },[topic,subTopic,difficulty,syncState])


    useEffect(()=>{

        initializeQuiz();

    },[initializeQuiz])


    const selectAnswer = useCallback((answerIndex)=>{

        setSelectedAnswer(answerIndex)

    },[])


    const submitAnswer = useCallback(()=>{

        if(selectedAnswer === null) return;

        const engine = engineRef.current;

        const result = engine.submitAnswer(selectedAnswer)

        setAnswerResult(result)


    },[selectedAnswer])


    const nextQuestion = useCallback(()=>{

        const engine = engineRef.current;

        if (!engine) return;

        const hasNext = engine.nextQuestion();

        if (!hasNext) {

            setSummary(engine.getSummary());

            setFinished(true);
        }

        syncState();

    },[syncState])


    const previousQuestion = useCallback(() => {

        const engine = engineRef.current;

        if (!engine) return;


    },[syncState])



    return { 
        // states
        question,
        currentQuestion,
        totalQuestions,
        selectedAnswer,
        answerResult,
        finished,
        summary,

        // functions
        selectAnswer,
        submitAnswer,
        nextQuestion,
        previousQuestion,
    }


}
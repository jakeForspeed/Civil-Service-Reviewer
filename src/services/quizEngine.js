import { getQuestions } from "./quizService";

export default class QuizEngine{


    constructor({topic, subTopic, difficulty}){

        this.topic = topic;
        this.subTopic = subTopic;
        this.difficulty = difficulty;

        this.questions = [];
        this.currentIndex = 0;
        this.answers = [];
        this.score = 0;

        this.startedAt = null;
        this.completedAt = null;
        this.completed = false;
    }

    async initialize(){

        this.questions = await getQuestions(this.topic, this.subTopic, this.difficulty);
        
        this.currentIndex = 0;
        this.answers = [];
        this.score = 0;

        this.completed = false;
        this.startedAt = new Date();
        this.completedAt = null;

        return this;
    }

    getCurrentQuestion() {

        return this.questions[this.currentIndex] ?? null;
    }

    getCurrentNumber() {

        return this.currentIndex + 1;
    }

    getTotalQuestions() {

        return this.questions.length;
    }

    getScore() {

        return this.score;
    }

    getCurrentAnswer() {

        return this.answers[this.currentIndex] ?? null;
    }

    isCurrentQuestionAnswered() {

        return !!this.answers[this.currentIndex];
    }

    submitAnswer(selectedAnswer) {

        if (this.isCurrentQuestionAnswered()) {
            return this.answers[this.currentIndex];
        }

        const question = this.getCurrentQuestion();

        const isCorrect = selectedAnswer === question.correctAnswer;

        const result = {
            questionId: question.id,
            selectedAnswer,
            correctAnswer: question.correctAnswer,
            isCorrect,
            explanation: question.explanation
        };

        this.answers[this.currentIndex] = result;

        if (isCorrect) {
            this.score++;
        }

        return result;
    }

    getSelectedAnswer() {

        const answer = this.answers[this.currentIndex];

        return answer ? answer.selectedAnswer : null;
    }

    getRemainingQuestions() {

        return ( this.getTotalQuestions() - this.currentIndex - 1);
    }

    hasQuestions() {

        return this.questions.length > 0;
    }

    canGoNext() {

        return this.currentIndex < this.questions.length - 1;
    }

    canGoPrevious() {

        return this.currentIndex > 0;
    }

    nextQuestion() {

        if (this.canGoNext()) {

            this.currentIndex++;

            return true;
        }

        this.finishQuiz();

        return false;
    }

    previousQuestion() {

        if (this.canGoPrevious()) {

            this.currentIndex--;

            return true;
        }

        return false;
    }

    isFinished() {

        return this.completed;
    }

    finishQuiz() {

        this.completed = true;

        this.completedAt = new Date();
    }


    /*
    |--------------------------------------------------------------------------
    | Statistics
    |--------------------------------------------------------------------------
    */
    getCorrectAnswers() {

        return this.score;
    }

    getIncorrectAnswers() {

        return this.answers.length - this.score;
    }

    getPercentage() {

        const total = this.getTotalQuestions();

        if (total === 0) {

            return 0;
        }

        return Math.round( (this.score / total) * 100 );
    }

    hasPassed() {

        return this.getPercentage() >= 70;
    }

    /*
    |--------------------------------------------------------------------------
    | Complete Summary
    |--------------------------------------------------------------------------
    */

    getSummary() {

        const totalQuestions = this.getTotalQuestions();
        const percentage = this.getPercentage();

        return {

            topic: this.topic,
            subTopic: this.subTopic,
            difficulty: this.difficulty,
            score: this.score,
            totalQuestions,
            correctAnswers: this.getCorrectAnswers(),
            incorrectAnswers: this.getIncorrectAnswers(),
            percentage,
            passed: this.hasPassed(),
            startedAt: this.startedAt,
            completedAt: this.completedAt,
            duration: this.startedAt && this.completedAt ? Math.round( (this.completedAt - this.startedAt) / 1000 ) : 0,
            answers: this.answers,
            questions: this.questions
        };
    }

}
import { loadMockTestQuestions } from "../lib/questionLoader";


/**
 * Fisher-Yates Shuffle
 */
function shuffle(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

/**
 * Generate Mock Test
 *
 * @param {Object} config
 *
 * Example:
 *
 * createMockTest({
 *    questionsPerSubtopic:{
 *        vocabulary:5,
 *        grammar:5,
 *        percentages:5
 *    }
 * })
 *
 */
export function createMockTest(config = {}) {

    const bank = loadMockTestQuestions();

    const {

        questionsPerSubtopic = {},

        shuffleQuestions = true

    } = config;

    const exam = [];

    bank.forEach(topic => {

        const topicResult = {

            topic: topic.topic,

            difficulty: topic.difficulty,

            subtopics: []

        };

        topic.subtopics.forEach(subtopic => {

            const count = questionsPerSubtopic[subtopic.name] ?? 2;

            const selectedQuestions = shuffle(subtopic.questions)
                .slice(0, count)
                .map(question => ({

                    ...question,

                    topic: topic.topic,

                    subtopic: subtopic.name,

                    difficulty: topic.difficulty

                }));

            topicResult.subtopics.push({

                name: subtopic.name,

                questions: selectedQuestions

            });

        });

        exam.push(topicResult);

    });

    if (shuffleQuestions) {

        exam.forEach(topic => {

            topic.subtopics.forEach(subtopic => {

                subtopic.questions = shuffle(subtopic.questions);

            });

        });

    }

    return exam;

}


/**
 * Save answer
 */
export function answerQuestion(answers, questionId, selectedAnswer) {

    answers[questionId] = selectedAnswer;

}



/**
 * Finish Exam
 */
export function finishTest(
    exam,
    answers,
    {
        timeRemaining,
        examDuration,
    }
) {

    let totalQuestions = 0;
    let correct = 0;

    const reviewedExam = exam.map(topic => {

        let topicCorrect = 0;
        let topicTotal = 0;

        const reviewedSubtopics = topic.subtopics.map(subtopic => {

            let subtopicCorrect = 0;

            const reviewedQuestions = subtopic.questions.map((question, index) => {

                totalQuestions++;
                topicTotal++;

                const userAnswer = answers[question.id];

                const isCorrect =
                    userAnswer === question.correctAnswer;

                if (isCorrect) {

                    correct++;
                    topicCorrect++;
                    subtopicCorrect++;

                }

                return {

                    ...question,

                    examNumber: totalQuestions,

                    userAnswer,

                    isCorrect,

                };

            });

            return {

                name: subtopic.name,

                total: reviewedQuestions.length,

                correct: subtopicCorrect,

                questions: reviewedQuestions,

            };

        });

        return {

            topic: topic.topic,

            difficulty: topic.difficulty,

            total: topicTotal,

            correct: topicCorrect,

            subtopics: reviewedSubtopics,

        };

    });

    const answered = Object.keys(answers).length;

    const unanswered = totalQuestions - answered;

    const incorrect = answered - correct;

    const percentage = Number(
        ((correct / totalQuestions) * 100).toFixed(2)
    );

    const passed = percentage >= 80;

    const timeUsed = examDuration - timeRemaining;

    return {

        completedAt: new Date().toISOString(),

        exam: reviewedExam,

        answers,

        totalQuestions,

        answered,

        unanswered,

        correct,

        incorrect,

        percentage,

        passed,

        timeUsed,

        topics: reviewedExam.map(topic => ({

            topic: topic.topic,

            total: topic.total,

            correct: topic.correct,

            subtopics: topic.subtopics.map(subtopic => ({

                name: subtopic.name,

                total: subtopic.total,

                correct: subtopic.correct,

            })),

        })),

    };

}
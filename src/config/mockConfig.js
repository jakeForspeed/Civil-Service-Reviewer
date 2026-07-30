/**
 * ============================================================================
 * Mock Test Configuration
 * ============================================================================
 *
 * This file contains constants and helper functions used by the Mock Test
 * engine. It does NOT define topics or subtopics.
 *
 * Topics, subtopics, paths, and settings are loaded from manifest.json.
 *
 * ============================================================================
 */

import manifest from "./manifest.json";

/**
 * Shortcut to the mock configuration inside manifest.json
 */
export const MOCK_SETTINGS = manifest.quiz.mock;

/**
 * Available topics
 */
export const MOCK_TOPICS = manifest.topics;

/**
 * Number of questions to pick per subtopic.
 *
 * Example:
 * Vocabulary -> 5
 * Grammar -> 5
 * Percentages -> 5
 */
export const QUESTIONS_PER_SUBTOPIC =
  MOCK_SETTINGS.questionsPerSubtopic;

/**
 * Mock exam difficulty.
 *
 * Current:
 * hard
 */
export const MOCK_DIFFICULTY =
  MOCK_SETTINGS.difficulty;

/**
 * Timer (minutes)
 */
export const MOCK_TIMER_MINUTES =
  MOCK_SETTINGS.timeLimitMinutes;

/**
 * Timer (seconds)
 */
export const MOCK_TIMER_SECONDS =
  MOCK_TIMER_MINUTES * 60;

/**
 * Shuffle answer choices.
 *
 * This only shuffles the options (A, B, C, D),
 * NOT the question order.
 */
export const SHUFFLE_CHOICES =
  MOCK_SETTINGS.shuffleChoices;

/**
 * Preserve section order.
 *
 * Questions remain grouped:
 *
 * Verbal
 *    Vocabulary
 *    Grammar
 *    ...
 *
 * Numerical
 *    ...
 *
 * General Information
 *    ...
 */
export const SHUFFLE_QUESTION_ORDER =
  MOCK_SETTINGS.shuffleQuestions;

/**
 * Show explanations after every question.
 *
 * Mock Exam:
 * false
 */
export const SHOW_EXPLANATION =
  MOCK_SETTINGS.showExplanation;

/**
 * Results are shown only after submitting the exam.
 */
export const SHOW_RESULT_AT_END =
  MOCK_SETTINGS.showResultOnlyAtEnd;

/**
 * Automatically compute the expected total number of questions.
 *
 * Formula:
 *
 * totalSubtopics × questionsPerSubtopic
 *
 * Current:
 *
 * Verbal               5
 * Numerical           10
 * General Information  7
 *
 * Total Subtopics = 22
 *
 * 22 × 5 = 110
 */
export function getExpectedQuestionCount() {
  const totalSubtopics = MOCK_TOPICS.reduce(
    (count, topic) => count + topic.subTopics.length,
    0
  );

  return totalSubtopics * QUESTIONS_PER_SUBTOPIC;
}

/**
 * Returns all configured topics.
 */
export function getMockTopics() {
  return MOCK_TOPICS;
}

/**
 * Returns all subtopics for a topic.
 *
 * @param {string} topicId
 * @returns {Array}
 */
export function getMockSubTopics(topicId) {
  const topic = MOCK_TOPICS.find(
    (item) => item.id === topicId
  );

  return topic ? topic.subTopics : [];
}

/**
 * Validates the mock configuration.
 *
 * Throws an error if the computed question count
 * does not match the configured value.
 */
export function validateMockConfiguration() {
  const expected = getExpectedQuestionCount();

  if (expected !== MOCK_SETTINGS.questionsPerSession) {
    throw new Error(
      [
        "Mock configuration mismatch.",
        `Configured: ${MOCK_SETTINGS.questionsPerSession}`,
        `Computed: ${expected}`,
        "",
        "Please update manifest.json."
      ].join("\n")
    );
  }

  return true;
}
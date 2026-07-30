import manifest from "../config/manifest.json";


export function getTopics () {
    return manifest.topics;
}

export function getTopic(topicId) {
    return manifest.topics.find(topic => topic.id === topicId);
}

export function getSubTopics(topicId) {
    const topic = getTopic(topicId);

    if (!topic) {
        return [];
    }

    return topic.subTopics;
}

export function getDifficultyLevels() {
    return manifest.difficulties;
}
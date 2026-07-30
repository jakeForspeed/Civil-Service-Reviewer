
const modules = import.meta.glob("../topics/**/hard.json",{eager: true, import: "default"})


export function loadMockTestQuestions(){

    const result = [];

    for(const path in modules){

        const [, ,topic, subtopic] = path.split("/");

        let topicEntry = result.find(item => item.topic === topic);

        if (!topicEntry) {

            topicEntry = {
                topic,
                difficulty: "hard",
                subtopics: [],
            };

            result.push(topicEntry);
        }

        topicEntry.subtopics.push({ name: subtopic, questions: modules[path], });

    }

    return result;
    
}
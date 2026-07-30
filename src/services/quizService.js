import manifest from "../config/manifest.json";



function shuffle(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function pickRandom(array, count) {

    const shuffled = shuffle(array);

    return shuffled.slice(0, count);
}



export async function getQuestions(topic, subTopic, difficulty) {

    const module = await import(
        `../topics/${topic}/${subTopic}/${difficulty}.json`
    );

    const questions = module.default ?? [];

    return pickRandom(questions, 15);

}


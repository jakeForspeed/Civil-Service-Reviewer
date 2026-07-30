import {
    getTopics,
    getSubTopics
} from "./reviewService";


function shuffle(array){

    const result = [...array];

    for( let i=result.length-1; i>0; i-- ){

        const random = Math.floor( Math.random()*(i+1) );
        [ result[i], result[random] ] =
        [ result[random], result[i] ];

    }
    return result;
}



export async function generateMockQuestions(total = 100) {

    const allQuestions = [];

    const topics = getTopics();

    const difficulties = ["easy", "medium", "hard"];

    for (const topic of topics) {

        const subTopics = getSubTopics(topic.id);

        for (const subTopic of subTopics) {

            for (const difficulty of difficulties) {

                try {

                    const module = await import(
                        `../topics/${topic.id}/${subTopic.id}/${difficulty}.json`
                    );

                    const questions = module.default || [];

                    allQuestions.push(

                        ...questions.map(question => ({

                            ...question,

                            topic: topic.name,

                            subTopic: subTopic.name,

                            difficulty

                        }))

                    );

                } catch {

                    console.log(
                        "Missing:",
                        topic.id,
                        subTopic.id,
                        difficulty
                    );

                }

            }

        }

    }

    return shuffle(allQuestions).slice(0, total);

}



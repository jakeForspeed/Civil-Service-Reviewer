import manifest from '../config/manifest.json'


export async function loadAllQuestions(){

    for( const topic of manifest.topics) {

        for(const subtopic of topic.subTopics){

            const questions = await loadQuestions(subtopic.path,"hard")
            
        }

        
    }

}
async function loadQuestions(path, difficulty) {

    const module = await import(`../topics/${path}/${difficulty}.json`);
    
    return module.default ?? [];
}
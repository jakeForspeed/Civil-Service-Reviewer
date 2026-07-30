export default class MockTestEngine {

    constructor(){

        this.questions = [];

        this.currentIndex = 0;

        this.answers = [];

        this.startedAt = null;

        this.completedAt = null;
    }

    initialize(questions){

        this.questions = questions;
        this.currentIndex = 0;
        this.answers = Array( questions.length ).fill(null);
        this.startedAt = Date.now();
    }

    getCurrentQuestion(){

        return this.questions[ this.currentIndex ];
    }

    getCurrentNumber(){

        return this.currentIndex + 1;
    }

    getTotalQuestions(){

        return this.questions.length;
    }

    selectAnswer(answer){


        this.answers[ this.currentIndex ] = answer;
    }

    next(){

        if(this.currentIndex < this.questions.length - 1 ){
            this.currentIndex++;
        }
    }

    previous(){


        if( this.currentIndex > 0 ){
            this.currentIndex--;
        }
    }

    finish(){

        this.completedAt = Date.now();
        return this.calculateResult();
    }

    calculateResult(){

        let score = 0;

        this.questions.forEach(
            (question,index)=>{

                if( question.correctAnswer === this.answers[index] ){

                    score++;
                }
            }
        );


        return {

            score,
            totalQuestions:this.questions.length,
            percentage: Math.round( score / this.questions.length * 100 ),
            answers: this.answers,
            questions: this.questions,
            duration: Math.floor( ( this.completedAt - this.startedAt ) /1000)
        };
    }

}
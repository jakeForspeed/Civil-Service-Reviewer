export default function QuestionNavigator({

    exam,

    answers

}) {

    const questions = [];

    exam.forEach(topic => {

        topic.subtopics.forEach(subtopic => {

            subtopic.questions.forEach(question => {

                questions.push(question);

            });

        });

    });

    return (

        <div className="grid grid-cols-10 gap-2">

            {

                questions.map((question, index) => {

                    const answered =

                        answers[question.id] !== undefined;

                    return (

                        <button

                            key={question.id}

                            className={`
                                h-10
                                rounded
                                font-semibold
                                ${answered
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-200"
                                }
                            `}

                        >

                            {index + 1}

                        </button>

                    );

                })

            }

        </div>

    );

}
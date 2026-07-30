import AnswerOption from "./AnswerOption";

export default function AnswerList({
    options = [],
    selectedAnswer,
    answerResult,
    onSelect
}) {

    return (

        <div
            className="
                mb-5
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-sm
            "
        >

            <h2
                className="
                    mb-4
                    text-base
                    font-semibold
                    text-slate-900
                "
            >
                Choose your answer
            </h2>

            <div className="space-y-3">

                {options.map((option, index) => (

                    <AnswerOption
                        key={index}
                        option={option}
                        index={index}
                        selectedAnswer={selectedAnswer}
                        answerResult={answerResult}
                        onSelect={onSelect}
                    />

                ))}

            </div>

        </div>

    );

}
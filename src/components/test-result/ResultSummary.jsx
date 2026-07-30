// src/components/result/ResultSummary.jsx

export default function ResultSummary({ result }) {

    return (

        <div className="bg-white rounded-xl shadow p-6 mb-6">

            <h1 className="text-3xl font-bold mb-6">

                CSC Mock Test Result

            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                <SummaryCard

                    title="Score"

                    value={`${result.correct} / ${result.totalQuestions}`}

                />

                <SummaryCard

                    title="Percentage"

                    value={`${result.percentage}%`}

                />

                <SummaryCard

                    title="Answered"

                    value={result.answered}

                />

                <SummaryCard

                    title="Unanswered"

                    value={result.unanswered}

                />

                <SummaryCard

                    title="Correct"

                    value={result.correct}

                />

                <SummaryCard

                    title="Incorrect"

                    value={result.incorrect}

                />

            </div>

        </div>

    );

}

function SummaryCard({

    title,

    value

}) {

    return (

        <div className="border rounded-lg p-4">

            <div className="text-gray-500">

                {title}

            </div>

            <div className="text-2xl font-bold">

                {value}

            </div>

        </div>

    );

}
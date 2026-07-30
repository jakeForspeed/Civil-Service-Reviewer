// src/components/result/TopicBreakdown.jsx

export default function TopicBreakdown({

    topics

}) {

    return (

        <div className="bg-white rounded-xl shadow p-6 mb-6">

            <h2 className="text-2xl font-bold mb-4">

                Topic Breakdown

            </h2>

            <table className="w-full">

                <thead>

                    <tr className="border-b">

                        <th className="text-left py-2">

                            Topic

                        </th>

                        <th>

                            Correct

                        </th>

                        <th>

                            Total

                        </th>

                        <th>

                            Percentage

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        topics.map(topic => {

                            const percentage = (

                                topic.correct /

                                topic.total

                            ) * 100;

                            return (

                                <tr

                                    key={topic.topic}

                                    className="border-b"

                                >

                                    <td className="py-3">

                                        {topic.topic}

                                    </td>

                                    <td className="text-center">

                                        {topic.correct}

                                    </td>

                                    <td className="text-center">

                                        {topic.total}

                                    </td>

                                    <td className="text-center">

                                        {percentage.toFixed(1)}%

                                    </td>

                                </tr>

                            );

                        })

                    }

                </tbody>

            </table>

        </div>

    );

}
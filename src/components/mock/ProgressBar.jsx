export default function ProgressBar({

    answered,

    total

}) {

    const percentage = (answered / total) * 100;

    return (

        <div className="w-72">

            <div className="flex justify-between text-sm mb-1">

                <span>

                    Answered

                </span>

                <span>

                    {answered} / {total}

                </span>

            </div>

            <div className="h-3 rounded bg-gray-200">

                <div

                    className="h-3 rounded bg-green-500"

                    style={{

                        width:`${percentage}%`

                    }}

                />

            </div>

        </div>

    );

}
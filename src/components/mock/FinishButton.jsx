import { useState } from "react";

export default function FinishButton({

    answered,

    total,

    onFinish

}) {

    const [showDialog, setShowDialog] = useState(false);

    const unanswered = total - answered;

    function handleFinish() {

        setShowDialog(false);

        onFinish();

    }

    return (

        <>

            <button
                onClick={() => setShowDialog(true)}
                className="
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    font-semibold
                    px-5
                    py-2
                    rounded-lg
                    transition
                "
            >
                Finish Test
            </button>

            {
                showDialog && (

                    <div
                        className="
                            fixed
                            inset-0
                            bg-black/50
                            flex
                            items-center
                            justify-center
                            z-50
                        "
                    >

                        <div
                            className="
                                bg-white
                                rounded-xl
                                shadow-xl
                                w-full
                                max-w-md
                                p-6
                            "
                        >

                            <h2 className="text-xl font-bold mb-4">

                                Finish Mock Test?

                            </h2>

                            <div className="space-y-2 mb-6">

                                <p>

                                    Answered:
                                    <span className="font-semibold">

                                        {" "}
                                        {answered}

                                    </span>

                                </p>

                                <p>

                                    Unanswered:
                                    <span className="font-semibold text-red-600">

                                        {" "}
                                        {unanswered}

                                    </span>

                                </p>

                                <p>

                                    Total Questions:
                                    <span className="font-semibold">

                                        {" "}
                                        {total}

                                    </span>

                                </p>

                            </div>

                            {

                                unanswered > 0 && (

                                    <div
                                        className="
                                            mb-6
                                            rounded
                                            bg-yellow-100
                                            text-yellow-800
                                            p-3
                                        "
                                    >

                                        You still have unanswered questions.
                                        Once you finish the test, you won't be
                                        able to change your answers.

                                    </div>

                                )

                            }

                            <div className="flex justify-end gap-3">

                                <button

                                    onClick={() => setShowDialog(false)}

                                    className="
                                        px-4
                                        py-2
                                        rounded
                                        border
                                    "

                                >

                                    Continue Test

                                </button>

                                <button

                                    onClick={handleFinish}

                                    className="
                                        px-4
                                        py-2
                                        rounded
                                        bg-red-600
                                        text-white
                                        hover:bg-red-700
                                    "

                                >

                                    Finish Test

                                </button>

                            </div>

                        </div>

                    </div>

                )

            }

        </>

    );

}
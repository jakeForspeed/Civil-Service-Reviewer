import {
    GraduationCap,
    CheckCircle2,
    XCircle,
} from "lucide-react";

export default function TestResultHeader({

    percentage,

    passed,

}) {

    return (

        <div
            className="
                mb-8
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
            "
        >

            <div className="text-center">

                {/* Icon */}

                <div
                    className="
                        mx-auto
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-100
                    "
                >

                    <GraduationCap
                        size={40}
                        className="text-blue-600"
                    />

                </div>

                {/* Title */}

                <h1
                    className="
                        mt-6
                        text-3xl
                        font-bold
                        text-slate-900
                    "
                >

                    Mock Test Completed

                </h1>

                <p
                    className="
                        mt-2
                        text-slate-500
                    "
                >

                    Your examination has been submitted successfully.

                </p>

                {/* Result Badge */}

                <div
                    className={`
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        px-5
                        py-2
                        text-sm
                        font-semibold

                        ${
                            passed
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }
                    `}
                >

                    {

                        passed

                            ? (

                                <CheckCircle2 size={18} />

                            )

                            : (

                                <XCircle size={18} />

                            )

                    }

                    {

                        passed

                            ? "PASSED"

                            : "FAILED"

                    }

                </div>

                {/* Percentage */}

                <div className="mt-6">

                    <h2
                        className={`
                            text-6xl
                            font-bold

                            ${
                                passed

                                    ? "text-green-600"

                                    : "text-red-600"

                            }
                        `}
                    >

                        {percentage}%

                    </h2>

                    <p
                        className="
                            mt-2
                            text-slate-500
                        "
                    >

                        Overall Examination Score

                    </p>

                </div>

            </div>

        </div>

    );

}
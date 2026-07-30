import { Link, useNavigate } from "react-router-dom";
import {
    ClipboardCheck,
    Timer,
    FileQuestion,
    BookOpen,
    ArrowLeft,
    Play
} from "lucide-react";

export default function MockOverview() {

    const navigate = useNavigate();

    function startMockTest() {

        navigate("/mock-test");

    }

    return (

        <div className="flex flex-1 items-center justify-center">

            <div className="w-full max-w-4xl">

                {/* Back */}

                <Link
                    to="/"
                    className="
                        mb-4
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-slate-500
                        transition
                        hover:text-blue-600
                    "
                >

                    <ArrowLeft size={16} />

                    Home

                </Link>

                {/* Header */}

                <div className="mb-6 text-center">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">

                        <ClipboardCheck
                            size={28}
                            className="text-blue-600"
                        />

                    </div>

                    <h1 className="mt-4 text-3xl font-bold text-slate-900">

                        Mock Test

                    </h1>

                    <p className="mt-2 text-slate-500">

                        Simulate a Civil Service Examination with a timed practice test.

                    </p>

                </div>

                {/* Information */}

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                    <div className="grid gap-4 md:grid-cols-3">

                        <InfoCard
                            icon={<FileQuestion size={20} />}
                            title="Questions"
                            value="100 Items"
                        />

                        <InfoCard
                            icon={<Timer size={20} />}
                            title="Time Limit"
                            value="100 Minutes"
                        />

                        <InfoCard
                            icon={<BookOpen size={20} />}
                            title="Coverage"
                            value="Mixed Topics"
                        />

                    </div>

                    {/* Instructions */}

                    <div className="mt-6 rounded-xl bg-slate-50 p-5">

                        <h2 className="text-lg font-semibold text-slate-900">

                            Instructions

                        </h2>

                        <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">

                            <li>• Questions are randomly selected from all categories.</li>

                            <li>• No explanations will be shown during the exam.</li>

                            <li>• You may change your answers before submitting.</li>

                            <li>• The timer starts immediately after clicking Start.</li>

                            <li>• The exam is automatically submitted when time expires.</li>

                        </ul>

                    </div>

                    {/* Start */}

                    <div className="mt-6">

                        <button
                            onClick={startMockTest}
                            className="
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-blue-600
                                py-3
                                font-semibold
                                text-white
                                transition
                                hover:bg-blue-700
                            "
                        >

                            <Play size={18} />

                            Start Mock Test

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

function InfoCard({
    icon,
    title,
    value
}) {

    return (

        <div
            className="
                flex
                items-center
                gap-3
                rounded-xl
                bg-slate-50
                p-4
            "
        >

            <div
                className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-100
                    text-blue-600
                "
            >

                {icon}

            </div>

            <div>

                <p className="text-xs uppercase text-slate-500">

                    {title}

                </p>

                <p className="font-semibold text-slate-900">

                    {value}

                </p>

            </div>

        </div>

    );

}
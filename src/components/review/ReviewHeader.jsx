import { ArrowLeft, BookOpenCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function ReviewHeader() {

    return (

        <header className="mb-6">

            <Link
                to="/"
                className=" mb-4 inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-slate-500 transition-all duration-200 hover:-translate-x-0.5 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                <ArrowLeft size={16} />
                Home
            </Link>

            <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">

                    <BookOpenCheck
                        size={24}
                        className="text-blue-600"
                    />

                </div>

                <div>

                    <h1 className="text-2xl font-bold text-slate-900">
                        Review Mode
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Select a topic, subtopic, and difficulty to begin.
                    </p>

                </div>

            </div>

        </header>

    );

}
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getModes } from "../../services/homeService";

const HomeCard = () => {

    const navigate = useNavigate();

    const modes = getModes();
    
    const onSelectMode = (modeId) => {

        if(modeId === "review"){
            navigate("/review");
        }
        else if(modeId === "mock-test"){
            navigate("/mock-overview");
        }
    };

  return (
    
    <div className="grid gap-8 md:grid-cols-2">
        {
            modes?.map((mode) => {

                const Icon = mode.icon;

                const isReview = mode.id === "review";

                return(
                    <button
                        key={mode.id}
                        onClick={() => onSelectMode(mode.id)}
                        className='group rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'
                    >
                        {/* Icon */}

                        <div className={` mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${ isReview ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600" } `}>
                            <Icon size={34} />
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl font-bold text-slate-900">
                            {mode.name}
                        </h2>

                        {/* Description */}
                        <p className="mt-4 leading-7 text-slate-600">
                            {mode.description}

                        </p>

                        {/* Footer */}
                        <div className="mt-8 flex items-center justify-between">
                            <span className={`font-semibold ${isReview ? "text-blue-600" : "text-green-600"}`}>
                                Start Now
                            </span>
                            <div className={`rounded-full p-2 transition-transform duration-300 group-hover:translate-x-1 ${isReview ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600" }`}>
                                <ArrowRight size={18} />

                            </div>
                        </div>
                    </button>
                )

            })
        }
    </div>

  )
}

export default HomeCard
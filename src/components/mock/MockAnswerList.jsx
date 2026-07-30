const LETTERS = [
    "A",
    "B",
    "C",
    "D"
];


export default function MockAnswerList({
    options = [],
    selectedAnswer,
    onSelect
}) {


    return (

        <div className=" rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <h2 className=" mb-4 text-sm font-bold text-slate-900">
                Choose your answer
            </h2>

            <div className="space-y-3">

                {
                    options.map((option,index)=>{
                        const selected = selectedAnswer === index;
                        return (

                            <button
                                key={index}
                                onClick={() => onSelect(index)}
                                className={`flex w-full items-center gap-4 rounded-xl border px-4 py-3 text-left transition ${ selected ? "border-blue-600 bg-blue-50" : "border-slate-200 bg-white hover:border-blue-400" }`}
                            >
                                <span className={` flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold
                                        ${ selected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700" }`}
                                >
                                    {LETTERS[index]}
                                </span>

                                <span className=" text-sm font-medium text-slate-900">
                                    {option}
                                </span>
                            </button>
                        );
                    })
                }
            </div>
        </div>
    );
}
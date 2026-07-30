export default function Timer({ timeRemaining }) {

    const minutes = Math.floor(timeRemaining / 60);

    const seconds = timeRemaining % 60;

    return (

        <h2 className={timeRemaining <= 600? "text-red-600": "text-gray-900"}>

            {minutes}:

            {seconds.toString().padStart(2, "0")}

        </h2>

    );

}

import HomeCard from "../components/home/HomeCard";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";

const Home = () => {


    return (
        <div className="flex flex-1 items-center">

            <div className="mx-auto w-full max-w-5xl">

                {/* Header */}

                <HomeHeader />

                {/* Mode Cards */}

                <HomeCard />

                {/* Footer */}

                <HomeFooter />

            </div>

        </div>
    )
}

export default Home
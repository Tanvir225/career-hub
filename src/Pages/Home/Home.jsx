import CaragoryList from "../../Components/CatagoryList/CaragoryList";
import Featured from "../../Components/Featured/Featured";
import Banner from "../../Components/Header/Banner";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="mt-10">
                <CaragoryList></CaragoryList>
            </div>
            <div className="mt-10">
                <Featured></Featured>
            </div>
        </div>
    );
};

export default Home;
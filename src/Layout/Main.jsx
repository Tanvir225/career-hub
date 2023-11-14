import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    return (
        <div>

            <div className="">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <div className="mt-10">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Main;
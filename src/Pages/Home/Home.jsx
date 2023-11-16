import { useEffect, useState } from "react";
import CaragoryList from "../../Components/CatagoryList/CaragoryList";
import Featured from "../../Components/Featured/Featured";
import Banner from "../../Components/Header/Banner";

const Home = () => {
    const [jobs,setJobs] = useState([])
    useEffect(()=>{
        fetch('/data/jobs.json')
        .then(res=> res.json())
        .then(data=> setJobs(data))
    },[])
    return (
        <div className="">
            <Banner></Banner>
            <div className="mt-10">
                <CaragoryList></CaragoryList>
            </div>
            <div className="mt-10">
                <Featured jobs={jobs}></Featured>
            </div>
        </div>
    );
};

export default Home;
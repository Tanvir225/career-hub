import { useEffect, useState } from "react";
import Singlefeatured from "../../Components/Featured/Singlefeatured";
import bgImage from "../../assets/images/bg1.png"
const Statistics = () => {
    const appliedJob = JSON.parse(localStorage.getItem('applied'));
    const [applied, setApplied] = useState([])
    useEffect(() => {
        setApplied(appliedJob)
    }, [])

    return (
        <div>
            <div
                className="h-[40vh] bg-base-200 bg-no-repeat bg-left-bottom flex flex-col items-center justify-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h1 className="font-extrabold text-2xl">You have Applied : {applied ? applied.length : 0} Jobs</h1>
            </div>
            <div className="max-w-5xl mx-auto mt-20 px-5 space-y-5 lg:p-0">
                {
                    applied?.map(job => <Singlefeatured key={job.id} job={job}></Singlefeatured>) 
                }
            </div>
        </div>
    );
};

export default Statistics;
import { useEffect, useState } from "react";
import bgImage from "../../assets/images/bg1.png";
import Singlefeatured from "../../Components/Featured/Singlefeatured";
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("../../../public/data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div
        className="h-[40vh] bg-base-200 bg-no-repeat bg-left-bottom flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="font-extrabold text-2xl">Apply Your favourite Jobs</h1>
      </div>
      <div className="max-w-6xl mx-auto px-5 mt-10 grid grid-cols-1 md:grid-cols-2 md:px-5 lg:grid-cols-3 gap-5">
        {
            jobs?.map(job => <Singlefeatured key={job.id} job={job}></Singlefeatured>)
        }
      </div>
    </div>
  );
};

export default Jobs;

import { useEffect, useState } from "react";
import bgImage from "../../assets/images/bg1.png";
import Singlefeatured from "../../Components/Featured/Singlefeatured";
import { FaFilter} from "react-icons/fa";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetch("/data/jobs.json")
      .then((res) => res.json())
      .then((data) => {setJobs(data),setFilteredData(data)});
  }, []);

  // filter data
  const handleFilter = (filterText) => {
    if (filterText === "all") {
      setFilteredData(jobs);
    } else if (filterText === "Remote") {
      const remoteFilter = jobs.filter(
        (job) => job.remote_or_onsite === filterText
      );
      setFilteredData(remoteFilter);
    } else if (filterText === "Onsite") {
      const onsiteFilter = jobs.filter(
        (job) => job.remote_or_onsite === filterText
      );
      setFilteredData(onsiteFilter);
    }
    else{
        setFilteredData(jobs)
    }
  };

  return (
    <div>
      <div
        className="h-[40vh] bg-base-200 bg-no-repeat bg-left-bottom flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="font-extrabold text-2xl">Apply Your favourite Jobs</h1>
      </div>

      <div className="flex justify-end max-w-5xl mx-auto mt-5 px-5">
        <details className="dropdown ">
          <summary className="m-1 btn">
            <FaFilter></FaFilter>Filter Job
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-36">
            <li>
              <a onClick={()=> handleFilter('all')}>All</a>
            </li>
            <li>
              <a onClick={()=> handleFilter('Remote')}>Remote</a>
            </li>
            <li>
              <a onClick={()=> handleFilter('Onsite')}>Onsite</a>
            </li>
          </ul>
        </details>
      </div>


      <div className="max-w-6xl mx-auto px-5 mt-10 grid grid-cols-1 md:grid-cols-2 md:px-5 lg:grid-cols-3 gap-5">
        {filteredData?.map((job) => (
          <Singlefeatured key={job.id} job={job}></Singlefeatured>
        ))}
      </div>
    </div>
  );
};

export default Jobs;

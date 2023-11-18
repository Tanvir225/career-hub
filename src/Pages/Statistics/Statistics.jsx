import { useEffect, useState } from "react";
import Singlefeatured from "../../Components/Featured/Singlefeatured";

import { FaFilter } from "react-icons/fa";
import DynamicBanner from "../../Components/Header/DynamicBanner";
const Statistics = () => {
  const appliedJob = JSON.parse(localStorage.getItem("applied"));

  const [applied, setApplied] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setApplied(appliedJob);
    setFilteredData(appliedJob)
  },[]);


  // filter data
  const handleFilter = (filterText) => {
    if (filterText === "all") {
      setFilteredData(applied);
    } else if (filterText === "Remote") {
      const remoteFilter = applied.filter(
        (job) => job.remote_or_onsite === filterText
      );
      setFilteredData(remoteFilter);
    } else if (filterText === "Onsite") {
      const onsiteFilter = applied.filter(
        (job) => job.remote_or_onsite === filterText
      );
      setFilteredData(onsiteFilter);
    }
    else{
        setFilteredData(applied)
    }
  };

  return (
    <div>
      <DynamicBanner title= {`You have applied ${filteredData ? filteredData.length :0} jobs`}></DynamicBanner>

      <div className="flex justify-end max-w-5xl mx-auto mt-5 px-5">
        <details className="dropdown ">
          <summary className="m-1 btn">
            {
              filteredData && (<p className=""><FaFilter></FaFilter>Filter Job</p>) 
            }
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-36">
            <li>
              <a onClick={() => handleFilter("all")}>All</a>
            </li>
            <li>
              <a onClick={() => handleFilter("Remote")}>Remote</a>
            </li>
            <li>
              <a onClick={() => handleFilter("Onsite")}>Onsite</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="max-w-5xl mx-auto mt-10 px-5 space-y-5 lg:p-0">
        {filteredData?.map((job) => (
          <Singlefeatured key={job.id} job={job}></Singlefeatured>
        ))}
      </div>
    </div>
  );
};

export default Statistics;

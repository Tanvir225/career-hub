import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Singlefeatured from "./Singlefeatured";
const Featured = ({ jobs }) => {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    const featuredFilter = jobs.filter((job) => job.featured === true);
    setFeatured(featuredFilter);
  }, [jobs]);
  return (
    <div className="space-y-5 max-w-5xl mx-auto px-5 lg:px-0">
      <h2 className="text-3xl font-extrabold text-center">
        Featured Jobs
      </h2>
      <p className="text-center font-semibold text-gray-500">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className=" py-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        {
            featured.map(job => <Singlefeatured key={job.id} job={job}></Singlefeatured>)
        }
      </div>
      <div className="text-center py-5">
        <button className="btn btn-outline btn-primary">Show All Jobs</button>
      </div>
    </div>
  );
};

Featured.propTypes = {
  jobs: PropTypes.array.isRequired,
};

export default Featured;

import PropTypes from "prop-types";
import { CiLocationOn  } from "react-icons/ci";
import { HiOutlineCurrencyBangladeshi   } from "react-icons/hi";
const Singlefeatured = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job || {};
  return (
    <div className="card  bg-base-100 border border-indigo-300 shadow-xl p-8 space-y-5">
      <figure className="w-[120px] h-[50px]">
        <img src={logo} alt={`${company_name} image`} className="w-full" />
      </figure>
      <div className="space-y-3">
        <h2 className="card-title">{job_title}</h2>
        <p className="font-semibold text-gray-500">{company_name}</p>
        <div>
          <button className="btn btn-outline btn-primary mr-5">
            {remote_or_onsite}
          </button>
          <button className="btn btn-outline btn-primary ">{job_type}</button>
        </div>
        <div className="flex gap-5 text-gray-500">
            <div className="flex items-center gap-2">
                <CiLocationOn></CiLocationOn>
                <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
                <HiOutlineCurrencyBangladeshi></HiOutlineCurrencyBangladeshi>
                <span>{salary}</span>
            </div>
        </div>
        <div className="card-actions ">
          <button className="btn btn-outline bg-gradient-to-r from-indigo-600 text-white">
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

Singlefeatured.propTypes = {
  job: PropTypes.object.isRequired,
};
export default Singlefeatured;

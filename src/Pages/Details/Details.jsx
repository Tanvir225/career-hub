import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bgImage from "../../assets/images/bg1.png";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { LuSubtitles } from "react-icons/lu";
import { FaPhoneAlt, FaAddressBook, FaMailBulk } from "react-icons/fa";
const Details = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("../../../public/data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  const { id } = useParams();
  const findDetails = jobs.find((job) => job.id === parseInt(id));

  return (
    <div>
      <div
        className="h-[40vh] bg-base-200 bg-no-repeat bg-left-bottom flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="font-extrabold text-2xl">Job details</h1>
      </div>
      <div className="max-w-5xl mx-auto mt-10 flex gap-10">
        <div className="w-2/3 mx-auto space-y-5">
          <p>
            <span className="font-extrabold">Job Description:</span>{" "}
            <span className="text-sm text-gray-500 font-semibold">
              {findDetails?.job_description}
            </span>
          </p>
          <p>
            <span className="font-extrabold">Job Responsibility:</span>{" "}
            <span className="text-sm text-gray-500 font-semibold">
              {findDetails?.job_responsibility}
            </span>
          </p>
          <p>
            <span className="font-extrabold">Educational Requirements:</span>{" "}
            <br />{" "}
            <span className="text-sm text-gray-500 font-semibold">
              {findDetails?.educational_requirements}
            </span>
          </p>
          <p>
            <span className="font-extrabold">Experiences:</span> <br />{" "}
            <span className="text-sm text-gray-500 font-semibold">
              {findDetails?.experiences}
            </span>
          </p>
        </div>
        <div className="bg-indigo-200 rounded-lg px-3 py-5 w-[30%] mx-auto h-fit space-y-4">
          <p className="border-b-2 font-semibold">Job Details</p>
          <h1 className="flex items-center gap-2">
            <HiOutlineCurrencyBangladeshi></HiOutlineCurrencyBangladeshi>
            <span className="font-extrabold">Salary:</span>

            <span className="text-gray-500">{findDetails?.salary}</span>
          </h1>
          <h1 className="flex items-center gap-2">
            <LuSubtitles></LuSubtitles>
            <span className="font-extrabold">Job Title:</span>
            <span className="text-gray-500">{findDetails?.job_title}</span>
          </h1>
          <p className="border-b-2 font-semibold">Contact Information</p>
          <h1 className="flex items-center gap-2">
            <FaPhoneAlt></FaPhoneAlt>
            <span className="font-extrabold">Phone:</span>
            <span className="text-gray-500">
              {findDetails?.contact_information?.phone}
            </span>
          </h1>
          <h1 className="flex items-center gap-2">
            <FaMailBulk></FaMailBulk>
            <span className="font-extrabold">email:</span>
            <span className="text-gray-500">
              {findDetails?.contact_information?.email}
            </span>
          </h1>
          <h1 className="flex gap-2">
            <FaAddressBook className="text-xl mt-1"></FaAddressBook>
            <span className="font-extrabold">Address:</span>
            <span className="text-gray-500">
              {findDetails?.contact_information?.address}
            </span>
          </h1>
          <div className="text-center bg-transparent">
            <button className="btn btn-outline btn-primary w-full">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import bgImage from "../../assets/images/bg1.png";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { LuSubtitles } from "react-icons/lu";
import { FaPhoneAlt, FaAddressBook, FaMailBulk } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
const Details = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("/data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  
  const { id } = useParams();
  const findDetails = jobs.find((job) => job.id === parseInt(id));
  const navigate = useNavigate()
  const handleApply = ()=>{
    
    const appliedJob = JSON.parse(localStorage.getItem('applied')|| "[]")
    if (!appliedJob) {
      localStorage.setItem('applied',JSON.stringify(findDetails))
      toast.success("You have applied successfully")
      navigate(-1)
     
    }
    else{
      const checkApplied = appliedJob.find(job=> job.id === parseInt(id))
      if (!checkApplied) {
        appliedJob.push(findDetails)
        localStorage.setItem('applied',JSON.stringify(appliedJob))
        toast.success("You have applied successfully")
        navigate(-1)
      }
      else{
        toast.error("You have already applied this job ")
        navigate(-1)
      }
    }
  }
  return (
    <div>
      <div
        className="h-[40vh] bg-base-200 bg-no-repeat bg-left-bottom flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="font-extrabold text-2xl">Job details</h1>
      </div>
      <div className="max-w-5xl px-5 mx-auto mt-20 flex flex-col gap-10 lg:flex-row lg:p-0">
        <div className=" w-full mx-auto space-y-5 lg:w-2/3">
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
        <div className="bg-indigo-200 rounded-lg px-3 py-5 w-full mx-auto h-fit space-y-4 lg:w-[32%]">
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
            <button onClick={handleApply} className="btn btn-outline btn-primary w-full">Apply Now</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Details;

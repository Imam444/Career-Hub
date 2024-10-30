import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../../utility/localstorage";
import { Helmet } from "react-helmet-async";
import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const handleApplyJob = () => {
    saveJobApplication(idInt)
    toast('You have applied successfully')
  }

  return (
    <> <Helmet>
      <title> Career Hub  | Job Details</title>
     </Helmet>
      <div className="container px-4 mx-auto py-16 flex flex-col lg:flex-row gap-5 ">
                <div className="flex flex-col gap-3">
                    <p className="text-sm text-neutral-500">
                        <span className="font-bold text-neutral-900">
                            Job Description:
                        </span>{" "}
                        {job.job_description}
                    </p>
                    <p className="text-sm text-neutral-500">
                        <span className="font-bold text-neutral-900">
                            Job Responsibility:
                        </span>{" "}
                        {job.job_responsibility}
                    </p>
                    <p className="text-sm font-bold text-neutral-900">
                        Educational Requirements:
                    </p>
                    <p className="text-sm text-neutral-500">
                        {job.educational_requirements}
                    </p>
                    <p className="text-sm font-bold text-neutral-900">
                        Experiences:
                    </p>
                    <p className="text-sm text-neutral-500">
                        {job.experiences}
                    </p>
                </div>
                <div className="w-full lg:w-8/12">
                    <div className="bg-[#f4f1ff] p-5 rounded-md">
                        <h2 className="text-md font-extrabold pb-2 mb-3 border-b-2">
                            Job Details
                        </h2>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-1 ">
                                <CiDollar className="w-5 h-5 text-indigo-400" />
                                <p className="text-sm text-neutral-500 ">
                                    <span className="font-bold text-neutral-900">
                                        Salary :
                                    </span>{" "}
                                    {job.salary}
                                </p>
                            </div>
                            <div className="flex gap-1">
                                <LuCalendarDays className="w-5 h-5 text-indigo-400" />
                                <p className="text-sm text-neutral-500">
                                    <span className="font-bold text-neutral-900">
                                        Job Title :
                                    </span>{" "}
                                    {job.job_title}
                                </p>
                            </div>
                        </div>
                        <h2 className="text-md font-extrabold pb-2 mb-3 border-b-2 pt-3">
                            Contact Information
                        </h2>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-1">
                                <FiPhone className="w-5 h-5 text-indigo-400" />
                                <p className="text-sm text-neutral-500">
                                    <span className="font-bold text-neutral-900">
                                        Phone :
                                    </span>{" "}
                                    {job.contact_information.phone}
                                </p>
                            </div>
                            <div className="flex gap-1">
                                <HiOutlineEnvelope className="w-5 h-5 text-indigo-400" />
                                <p className="text-sm text-neutral-500">
                                    <span className="font-bold text-neutral-900">
                                        Email :
                                    </span>{" "}
                                    {job.contact_information.email}
                                </p>
                            </div>
                            <div className="flex gap-1">
                                <IoLocationOutline className="w-5 h-5 text-indigo-400" />
                                <p className="text-sm text-neutral-500">
                                    <span className="font-bold text-neutral-900">
                                        Address :
                                    </span>{" "}
                                    {job.contact_information.address}
                                </p>
                            </div>
                        </div>
                      </div>
                      <button
                        onClick={handleApplyJob}
                        className="btn btn-block bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-5 mt-3"
                    >
                        Apply Now
                    </button>
                    <ToastContainer /> 
             
          </div>
      </div>
              
        
      
   </>
  );
};

export default JobDetails;

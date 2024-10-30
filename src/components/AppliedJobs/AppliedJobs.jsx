import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import { Helmet } from "react-helmet-async";
import Job from "../Job/Job";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJob, setAppliedJob] = useState([]);
  const [displayJob, setDisplayJob] = useState([]);
   const [filter, setFilter] = useState("All");

  
    if (filter === "all") {
      setDisplayJob(appliedJob);
    } else if (filter === "remote") {
      const remoteJobs = appliedJob.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJob(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJob.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJob(onsiteJobs);
    }
  
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      //
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJob(jobsApplied);
      setDisplayJob(jobsApplied);
    }
  }, [jobs]);
  return (
    <>
      <Helmet>
        <title>Career Hub | Applied Job</title>
      </Helmet>
      
      <div className="container px-6 mx-auto py-16 overflow-hidden">
        <div className="mb-5 text-right">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Filter By
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={() => setFilter("all")}>All</button>
              </li>
              <li>
                <button onClick={() => setFilter("Remote")}>
                  Remote
                </button>
              </li>
              <li>
                <button onClick={() => setFilter("Onsite")}>
                  Onsite
                </button>
              </li>
            </ul>
          </div>
        </div>
        {displayJob.length ? (
          <div className="flex flex-col gap-4">
            {displayJob.map((job) => (
              <Job
                key={job.id}
                job={job}
                setAppliedJobs={setAppliedJob}
                appliedJobs={appliedJob}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h4 className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text">
              You didn&apos;t applied for Jobs{filter}
            </h4>
          </div>
        )}
      </div>
      ) : (
      <div className="container mx-auto py-40 text-center">
        <h4 className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text">
          You didnt&apos;t applied for any Jobs{filter}
        </h4>
        <p className="text-neutral-500 py-2">
          Apply for jobs to see them listed here.
        </p>
        <button
          onClick={() => setFilter("jobs")}
          className="btn bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-3 md:px-5 z-50"
        >
          Apply Now
        </button>
      </div>
    </>
  );
};

export default AppliedJobs;

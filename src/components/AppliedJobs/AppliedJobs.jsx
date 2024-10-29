import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([]);
  const [displayJob, setDisplayJob] = useState([]);
  const handleJobsFilter = filter => {
    if (filter === 'all') {
      setDisplayJob(appliedJob)
    }
    else if (filter === 'remote') {
      const remoteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Remote')
      setDisplayJob(remoteJobs)
    }
    else if (filter === 'onsite') {
      const onsiteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Onsite')
      setDisplayJob(onsiteJobs)
    }
  }
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      //
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find(job => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
        setAppliedJob(jobsApplied);
        setDisplayJob(jobsApplied)
    }
  }, [jobs]);
  return (
    <div>
      <h2 className="text-2xl">I Applied Jobs:{appliedJob.length}</h2>
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={() => handleJobsFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}> <a>Remote</a></li>
          
          <li onClick={() => handleJobsFilter("onsite")}><a>Onsite</a></li>
            
          
        </ul>
      </details>

      <ul>
        {displayJob.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title} {job.company_name} :{job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;

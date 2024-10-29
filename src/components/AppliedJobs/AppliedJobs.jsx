import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";


const AppliedJobs = () => {
    const jobs = useLoaderData()
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const appliedJobs= jobs.filter(jobs =>)
        }
    },[])
    return (
        <div>
            <h2>I Applied Jobs</h2>
        </div>
    );
};

export default AppliedJobs;
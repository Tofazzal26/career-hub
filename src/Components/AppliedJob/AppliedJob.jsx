import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../SaveLocalStorage/SaveLocalStorage";
import Applied from "../Applied/Applied";

const AppliedJob = () => {
  const jobs = useLoaderData();

  const [appliedJob, setAppliedJob] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJob);
    } else if (filter === "remote") {
      const remoteJobs = appliedJob.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJob.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJob = getStoredApplication();

    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJob) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJob(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  return (
    <div className="container mx-auto">
      <div className="space-y-4 mt-24 mb-24">
        <div className="text-right">
          <details className="dropdown">
            <summary className="m-1 btn">Filter By</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={() => handleJobFilter("all")}>
                <a>All</a>
              </li>
              <li onClick={() => handleJobFilter("remote")}>
                <a>Remote</a>
              </li>
              <li onClick={() => handleJobFilter("onsite")}>
                <a>Onsite</a>
              </li>
            </ul>
          </details>
        </div>
        {displayJobs.map((job) => (
          <Applied key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../SaveLocalStorage/SaveLocalStorage";
import Applied from "../Applied/Applied";

const AppliedJob = () => {
  const jobs = useLoaderData();

  const [appliedJob, setAppliedJob] = useState([]);

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
    }
  }, []);

  return (
    <div className="container mx-auto">
      <div className="space-y-4">
        {appliedJob.map((job) => (
          <Applied key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;

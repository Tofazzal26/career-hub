import { useLoaderData, useParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { saveLocalStored } from "../SaveLocalStorage/SaveLocalStorage";

const JobDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const idnx = parseInt(id);
  const job = details.find((idx) => idx.id === idnx);

  const handleJobApply = () => {
    saveLocalStored(idnx);
    toast.success("Successfully toasted!");
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold my-12 text-center">Job Details</h2>
      <div className="grid grid-cols-8 mb-14">
        <div className="col-span-6 space-y-6">
          <p className="text-lg font-bold">
            Job Description:{" "}
            <span className="text-[#757575] text-base font-medium">
              {job.job_description}
            </span>
          </p>
          <p className="text-lg font-bold">
            Job Responsibility:{" "}
            <span className="text-[#757575] text-base font-medium">
              {job.job_responsibility}
            </span>
          </p>
          <p className="text-lg font-bold">Educational Requirements:</p>
          <p className="text-[#757575] text-base font-semibold">
            {job.educational_requirements}
          </p>
          <p className="text-lg font-bold">Experiences:</p>
          <p className="text-[#757575] text-base font-semibold">
            {job.experiences}
          </p>
        </div>
        <div className="col-span-2">
          <div className="bg-[#f4f1ff] rounded-md">
            <div className="p-6">
              <h2 className="text-lg font-semibold">Job Details</h2>
              <div className="divider"></div>
              <p className="text-base font-semibold text-[#626262]">Salary: </p>
              <p className="text-base font-semibold text-[#626262]">
                Job Title:{" "}
              </p>
              <h2 className="text-lg font-semibold">Contact Information</h2>
              <div className="divider"></div>
              <p className="text-base font-semibold text-[#626262]">Phone: </p>
              <p className="text-base font-semibold text-[#626262]">Email: </p>
              <p className="text-base font-semibold text-[#626262]">
                Address:{" "}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={handleJobApply}
              className="btn text-lg text-white w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-bold"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default JobDetails;

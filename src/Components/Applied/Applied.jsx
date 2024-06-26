import logo from "../../assets/logo/google.png";
import money from "../../assets/icons/money.png";
import locations from "../../assets/icons/location2.png";

const Applied = ({ job }) => {
  const {
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
  } = job;

  return (
    <div className="card card-compact border-2">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-[#f4f4f4] py-16 px-8 rounded-md">
              <img className="w-20" src={logo} alt="" />
            </div>
            <div className="space-y-4">
              <h2 className="card-title text-[#474747]">{job_title}</h2>
              <p className="text-base font-semibold text-[#757575]">
                {company_name}
              </p>
              <div className="space-x-3">
                <button className="border border-[#7e90fe] px-5 py-2 rounded-md text-base font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">
                  {remote_or_onsite}
                </button>
                <button className="border border-[#7e90fe] px-5 py-2 rounded-md text-base font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">
                  {job_type}
                </button>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-1">
                  <img src={locations} alt="" />
                  <h2 className="text-base font-semibold text-[#757575]">
                    {location}
                  </h2>
                </div>
                <div className="flex items-center gap-1">
                  <img src={money} alt="" />
                  <h2 className="text-base font-semibold text-[#757575]">
                    Salary: {salary}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="card-actions">
            <button className="btn text-lg text-white w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-bold">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applied;

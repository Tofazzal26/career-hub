import { NavLink } from "react-router-dom";
import locations from "../../assets/icons/location2.png";
import money from "../../assets/icons/money.png";

const FeaturedJobCard = ({ feature }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
    id,
  } = feature;

  return (
    <div className="card card-compact border-2">
      <div className="card-body">
        <img className="w-20" src={logo} alt="" />
        <h2 className="card-title text-[#474747]">{job_title}</h2>
        <p className="text-base font-semibold text-[#757575]">{company_name}</p>
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
        <div className="card-actions">
          <NavLink to={`/job/${id}`}>
            <button className="btn text-lg text-white  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-bold">
              View Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobCard;

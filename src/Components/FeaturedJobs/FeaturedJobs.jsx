import { useEffect, useState } from "react";
import FeaturedJobCard from "../FeaturedJobCard/FeaturedJobCard";

const FeaturedJobs = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("../../../public/jobs.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <div className="mt-12 mb-8">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">Featured Jobs</h1>
          <p className="text-base my-4 font-medium text-[#757575]">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {features.map((feature) => (
            <FeaturedJobCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;

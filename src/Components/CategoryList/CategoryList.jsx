import { useEffect } from "react";
import { useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("../../../public/categories.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="container mx-auto">
      <div>
        <div className="mt-24">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold">Job Category List</h1>
            <p className="text-base font-medium my-4 text-[#757575]">
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {jobs.map((job) => (
              <Category key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;

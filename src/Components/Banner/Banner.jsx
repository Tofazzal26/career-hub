import user from "../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="mt-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <h1 className="text-[65px] leading-[80px] w-[570px] font-extrabold">
              One Step Closer To Your{" "}
              <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">
                Dream Job
              </span>
            </h1>
            <p className="text-lg font-medium w-[500px] my-8 text-[#757575]">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn text-lg text-white  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-bold">
              Get Started
            </button>
          </div>
          <div>
            <img
              className="h-[550px] w-[600px] border-2 border-dotted"
              src={user}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

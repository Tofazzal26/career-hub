import user from "../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center">
        <div>
          <h1 className="text-[70px] font-extrabold">
            One Step Closer To Your
            <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">
              Dream Job
            </span>
          </h1>
          <p className="text-lg font-medium text-[#757575]">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn text-lg text-white  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-bold">
            Get Started
          </button>
        </div>
        <div>
          <img className="h-[550px] w-[800px]" src={user} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

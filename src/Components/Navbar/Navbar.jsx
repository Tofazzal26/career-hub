import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Statistics</a>
            </li>
            <li>
              <a>Applied Jobs</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-3xl font-extrabold">
          CareerHub
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-bold">
          <li>
            <NavLink
              to="/"
              className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics" className="text-[#757575]">
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink to="/applied" className="text-[#757575]">
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className="text-[#757575]">
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink
          to="/"
          className="btn text-lg text-white  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-bold"
        >
          Star Applying
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

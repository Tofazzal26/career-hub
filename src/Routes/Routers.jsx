import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Components/Root/Root";
import Statistics from "../Components/Statistics/Statistics";
import AppliedJob from "../Components/AppliedJob/AppliedJob";
import Blogs from "../Components/Blogs/Blogs";
import JobDetails from "../Components/JobDetails/JobDetails";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/job/:id",
        loader: () => fetch("../../public/jobs.json"),
        element: <JobDetails />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied",
        element: <AppliedJob />,
        loader: () => fetch("../../public/jobs.json"),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default Routers;

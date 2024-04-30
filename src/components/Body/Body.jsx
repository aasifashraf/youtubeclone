import Sidebar from "./Sidebar";
import FilterButtons from "./FilterButtons";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="flex ">
      <div>
        <Sidebar className="w-[30rem]" />
      </div>
      <div className="ml-6 w-1/1 ">
        <FilterButtons />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;

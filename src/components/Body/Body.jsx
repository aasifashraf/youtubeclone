import Sidebar from "./Sidebar";
import FilterButtons from "./FilterButtons";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { showFilterButtons } from "../../utilities/ReduxStore/NavigationSlice";
const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(showFilterButtons());
  });
  const filterButtons = useSelector((store) => store.Navigation.filterbuttons);
  // console.log(filterButtons);
  return (
    <div className="flex ">
      <div>
        {" "}
        <Sidebar className="w-[30rem]" />
      </div>
      <div className="ml-6 w-1/1 ">
        {filterButtons && <FilterButtons />}
        <Outlet />
      </div>
    </div>
  );
};

export default Body;

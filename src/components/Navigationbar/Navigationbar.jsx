import { RxHamburgerMenu } from "react-icons/rx";
import { youtubelogo } from "../../utilities/constants/constants";
import Search from "../Navigationbar/Search";
import { CgProfile } from "react-icons/cg";

const Navigationbar = () => {
  return (
    <div className="flex items-center justify-between  shadow-lg my-[.5rem] px-[1rem]">
      <div className=" flex text-2xl  p-[1rem] ">
        <RxHamburgerMenu className="cursor-pointer" />
        <img src={youtubelogo} alt="logo" className=" h-[1.5rem] mx-[1rem]" />
      </div>
      <div>
        <Search />
      </div>
      <div className="font-bold p-[1rem]">
        <CgProfile className="text-2xl" />
      </div>
    </div>
  );
};

export default Navigationbar;

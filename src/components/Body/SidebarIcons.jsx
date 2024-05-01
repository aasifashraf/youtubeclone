import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const SidebarIcons = () => {
  return (
    <div className="flex flex-col w-[4rem] justify-around">
      <div className="flex flex-col justify-center items-center mt-6 cursor-pointer">
        <Link to="/">
          <IoHomeSharp className="text-2xl" />
        </Link>
        <p className=" text-[0.6rem] font-thin">Home</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-6 cursor-pointer">
        <SiYoutubeshorts className="text-2xl" />
        <p className=" text-[0.6rem] font-thin">Shorts</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-6 cursor-pointer">
        <MdSubscriptions className="text-2xl" />
        <p className=" text-[0.6rem] font-thin">Subcription</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-6 cursor-pointer">
        <FaYoutube className="text-2xl" />
        <p className=" text-[0.6rem] font-thin">You</p>
      </div>
    </div>
  );
};

export default SidebarIcons;

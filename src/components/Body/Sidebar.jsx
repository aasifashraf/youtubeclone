import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

const Sidebar = () => {
  const sidebarlist = [
    "Your channel",
    "History",
    "Playlist",
    "Your Videos",
    "Watch later",
    "Liked videos",
    "Your Clip",
  ];

  const subscription = ["Sci Fi", "Music", "Comedy", "Gaming", "Sports"];

  return (
    <div className="w-1/6 h-full border-r-[1px] ">
      <div className="border-b-[1px] mx-5">
        <div className="flex p-1 items-center">
          <MdHomeFilled className="px-2 text-4xl" />
          <p>Home</p>
        </div>
        <div className="flex p-1 items-center">
          <SiYoutubeshorts className="px-2 text-4xl" />
          <p>Shots</p>
        </div>
        <div className="flex p-1 items-center">
          <MdSubscriptions className="px-2 text-4xl" />
          <p>subscription</p>
        </div>
      </div>
      <div className="border-b-[1px] mx-5">
        {sidebarlist.map((item) => (
          <div className="flex p-2  px-2 items-center ">
            <p className="px-4">{item}</p>
          </div>
        ))}
      </div>
      <div className="mx-5">
        {subscription.map((item) => (
          <div className="flex p-2  px-2 items-center ">
            <p className="px-4">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

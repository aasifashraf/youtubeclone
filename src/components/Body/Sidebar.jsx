import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";

import { TbNewSection } from "react-icons/tb";
import { GoHistory } from "react-icons/go";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { RiScissorsLine } from "react-icons/ri";
import { BiImages } from "react-icons/bi";

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

  const sidebarListIcons = [
    <TbNewSection className="text-xl font-bold" />,
    <GoHistory className="text-xl font-bold" />,
    <MdOutlinePlaylistPlay className="text-xl font-bold" />,
    <GoVideo className="text-xl font-bold" />,
    <MdOutlineWatchLater className="text-xl font-bold" />,
    <AiOutlineLike className="text-xl font-bold" />,
    <RiScissorsLine className="text-xl font-bold" />,
  ];

  const subscription = ["Sci Fi", "Music", "Comedy", "Gaming", "Sports"];

  const showNavigation = useSelector((store) => store.Navigation.show);

  if (!showNavigation) return null;

  return (
    <div className="w-[13rem] h-full overflow-y-scoll position-fixed">
      <div className="border-b-[1px] mx-4">
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
      <div className="border-b-[1px] mx-5 p-1">
        <h2 className="mt-5 font-bold">You</h2>
        {sidebarlist.map((item, index) => (
          <div className="flex p-2 px-2  items-center" key={index}>
            {sidebarListIcons[index] && sidebarListIcons[index]}{" "}
            {/* Render the icon if it exists */}
            <p className="px-4">{item}</p>
          </div>
        ))}
      </div>
      <div className="mx-5">
        <h2 className="mt-5 font-bold">Subcription</h2>
        {subscription.map((item, index) => (
          <div className="flex p-2 px-2 items-center" key={index}>
            <div>
              <BiImages className=" text-2xl" />
            </div>
            <p className="px-4">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

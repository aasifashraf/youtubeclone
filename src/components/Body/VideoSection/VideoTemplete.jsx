import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const VideoTemplete = ({ details }) => {
  if (!details) return null;

  const { snippet, statistics } = details;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  console.log(details);

  return (
    <div className="w-[23rem] px-2 my-[1rem]">
      <img
        src={thumbnails?.high?.url}
        alt="thumbnail"
        className=" rounded-xl  "
      />
      <div className="px-2">
        <p className="text-sm font-bold h-[1.5rem] overflow-hidden">{title}</p>
        <div className="flex">
          <FaRegCircleUser className="mr-2" />
          <p className="text-xs text-gray-500">{channelTitle}</p>
        </div>
      </div>
      <div className="px-2 flex ">
        <p className="text-xs text-gray-500 ml-6">
          {Math.round(viewCount / 1000)}K Views
        </p>
      </div>
    </div>
  );
};

export default VideoTemplete;

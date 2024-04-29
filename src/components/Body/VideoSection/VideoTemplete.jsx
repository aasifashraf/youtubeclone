import React from "react";

const VideoTemplete = ({ details }) => {
  const { snippet, statistics } = details;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount, likeCount } = statistics;
  console.log(details);

  return (
    <div>
      <img src={thumbnails.high.url} alt="thumbnail" className="w-full" />
      <div className="p-2">
        <p className="text-sm font-bold">{title}</p>
        <p className="text-xs text-gray-500">{channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoTemplete;

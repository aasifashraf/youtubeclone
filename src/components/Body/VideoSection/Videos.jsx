import React, { useState, useEffect } from "react";
import { API } from "../../../utilities/constants/constants";
import VideoTemplete from "./VideoTemplete";
import ShimmerUI from "../../../utilities/constants/ShimmerUI";
import { Link } from "react-router-dom";
const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
    setVideos(data.items);
  };
  if (!videos) return <ShimmerUI width="w-full" height="h-24" />;

  return (
    <div className=" w-full flex flex-wrap">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`}>
          <VideoTemplete details={video} />
        </Link>
      ))}
    </div>
  );
};

export default Videos;

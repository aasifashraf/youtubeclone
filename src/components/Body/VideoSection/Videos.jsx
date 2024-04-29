import React, { useState, useEffect } from "react";
import { API } from "../../../utilities/constants/constants";
import VideoTemplete from "./VideoTemplete";
const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(API);
    const data = await response.json();
    // console.log(data);
    setVideos(data.items);
  };

  return (
    <div>
      <VideoTemplete details={videos[0]} />
    </div>
  );
};

export default Videos;

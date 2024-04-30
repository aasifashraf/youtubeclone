import React, { useEffect } from "react";
import { hideSidebar } from "../../../utilities/ReduxStore/NavigationSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const WatchVideos = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(hideSidebar());
  }, []);
  return (
    <div>
      <iframe
        className="rounded-xl ml-[8rem]"
        width="700"
        height="360"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?controls=0&modestbranding=1"
        }
        title="YouTube video player"
        frameorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullscreen></iframe>
    </div>
  );
};

export default WatchVideos;

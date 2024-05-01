import React, { useEffect, useState } from "react";
import {
  hideFilterButtons,
  hideSidebar,
} from "../../../utilities/ReduxStore/NavigationSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Videos from "./Videos";
import { API_KEY } from "../../../utilities/constants/constants";
import CommentSection from "./CommentSection";

const WatchVideos = () => {
  const [comments, setComments] = useState([]);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(hideSidebar());
    dispatch(hideFilterButtons());
    commentapi();
  }, []);

  const commentapi = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${searchParams.get(
        "v"
      )}&maxResults=100&key=${API_KEY}`
    );
    const data = await response.json();
    setComments(data.items);
  };
  return (
    <div className="w-full">
      <div className="flex">
        <div className="mt-5">
          <iframe
            className="rounded-xl ml-[0rem]"
            width="880"
            height="510"
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
        <div className="w-full h-[90vh] overflow-scroll overflow-x-hidden">
          <Videos className="rounded-xl" />
        </div>
      </div>
      <div className="w-full h-[50rem]">
        {comments.map((comment) => (
          <CommentSection key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default WatchVideos;

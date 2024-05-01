import React from "react";

const CommentSection = ({ comment }) => {
  console.log(comment);
  if (!comment) return null;

  const { authorDisplayName, textOriginal, authorProfileImageUrl } =
    comment.snippet.topLevelComment.snippet;

  return (
    <div className="w-full  mb-[1rem] mr-[3rem] border-b-[0.1rem] p-[2rem]">
      <div className="flex mb-1 border-black">
        <img
          src={authorProfileImageUrl}
          alt=""
          className="w-[2rem] mr-1 rounded-full "
        />
        <p className=" font-bold">{authorDisplayName}</p>
      </div>
      <div>
        <p>{textOriginal}</p>
      </div>
    </div>
  );
};

export default CommentSection;

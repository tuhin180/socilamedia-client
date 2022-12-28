import React, { useState } from "react";
import likesimg from "../../assets/like.png";
import loveimg from "../../assets/heart.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Users } from "../../FalseData";
const Post = ({ post }) => {
  const { desc, photo, date, like, Comment } = post;

  const [likes, SetLikes] = useState(like);
  const [isLikes, SetIsLikes] = useState(false);

  const reactHandler = () => {
    SetLikes(isLikes ? likes - 1 : likes + 1);
    SetIsLikes(!isLikes);
  };
  return (
    <div className="w-11/12 mx-auto shadow-xl mt-8 p-4 rounded-xl">
      <div className="flex justify-between">
        <div className="flex  items-center gap-1">
          <img
            className="w-12 h-12 rounded-full"
            src={
              Users.filter((user) => user.id === post?.userId)[0].profilePicture
            }
            alt=""
          />
          <h1 className="font-semibold text-xl">
            {Users.filter((user) => user.id === post?.userId)[0].UserName}
          </h1>
          <p className="text-sm ml-5"> {date}</p>
        </div>
        <div>
          <BsThreeDotsVertical className="text-2xl" />
        </div>
      </div>
      <div>
        <h1 className="m-3 font-semibold">{desc} </h1>
        <img src={photo} className="rounded-md" alt="" />
        <div className="flex justify-between mt-5">
          <div className=" flex gap-3 items-center">
            <img src={likesimg} alt="" onClick={reactHandler} />
            <img src={loveimg} alt="" onClick={reactHandler} />
            <h1 className="font-semibold">{likes} people likes your post</h1>
          </div>
          <div className=""> {Comment} commets</div>
        </div>
      </div>
    </div>
  );
};

export default Post;

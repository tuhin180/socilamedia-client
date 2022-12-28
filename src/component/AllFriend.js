import React from "react";

const AllFriend = ({ user }) => {
  const { UserName, profilePicture } = user;
  return (
    <>
      <li className="flex gap-3 mb-5">
        <img className="w-14 h-14 rounded-full" src={profilePicture} alt="" />
        <span className=" flex justify-center items-center">{UserName}</span>
      </li>
    </>
  );
};

export default AllFriend;

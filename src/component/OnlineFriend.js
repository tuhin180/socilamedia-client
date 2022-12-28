import React from "react";

const OnlineFriend = ({ user }) => {
  const { UserName, profilePicture } = user;
  return (
    <div className="my-4">
      <div className="flex items-center gap-1">
        <img className="w-12 h-12 rounded-full" src={profilePicture} alt="" />
        <span className="bg-green-600 rounded-full px-2 py-2 mb-6 -ml-2"></span>
        <span className="font-semibold">{UserName}</span>
      </div>
    </div>
  );
};

export default OnlineFriend;

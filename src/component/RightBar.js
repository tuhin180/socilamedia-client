import React from "react";
import gift from "../assets/gift.png";
import ad from "../assets/ad.png";

import { Users } from "../FalseData";
import OnlineFriend from "./OnlineFriend";
const RightBar = () => {
  return (
    <div className="my-5">
      <div className="flex items-center gap-1">
        <img className="w-14" src={gift} alt="" />
        <p>
          <span className="font-bold">Md.Tuhin Hossain</span> and{" "}
          <span className="font-bold">3 Others </span> have birthday today
        </p>
      </div>
      <img className="mt-2 rounded" src={ad} alt="" />
      <div className="my-4">
        <h1 className="font-bold">Oline Friends</h1>
        {Users.map((user) => (
          <OnlineFriend key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default RightBar;

import React from "react";
import Feed from "../../component/Feed";
import LeftBar from "../../component/LeftBar";

import banner from "../../assets/post/3.jpeg";
import banner1 from "../../assets/post/4.jpeg";

import { Users } from "../../FalseData";

const Profile = () => {
  return (
    <div className="flex ">
      <div className="basis-1/4 h-[calc(100vh-50px)] overflow-y-scroll  ">
        <LeftBar></LeftBar>
      </div>

      <div className="basis-3/4">
        <div className="">
          <img className="w-full h-80 " src={banner} alt="" />
          <img
            className="w-28 h-28 rounded-full mx-auto -mt-20  "
            src={banner1}
            alt=""
          />
          <h1 className="font-bold text-2xl text-center"> MD.Tuhin Hossain</h1>
          <p className="text-center font-light">
            When life gets you down remember that, there is only one down,rest
            is up
          </p>
        </div>
        <div className="flex">
          <div className="basis-3/4 h-[calc(100vh-50px)] p-2">
            <Feed></Feed>
          </div>
          <div className="basis-1/4 h-[calc(100vh-50px)]">
            <div>
              <h1 className="font-bold text-xl ">User Information</h1>
              <div className="mt-4">
                <h1 className="text-2xl">
                  City: <span>Barishal</span>
                </h1>
                <h1 className="text-2xl">
                  From: <span>Barishal</span>
                </h1>
                <h1 className="text-2xl">
                  Relationship: <span>Single</span>
                </h1>
              </div>
              <div className="mt-4">
                <h1 className="text-xl font-bold">User Friends</h1>

                <div className="grid grid-cols-3 gap-2">
                  {Users.map((friend) => (
                    <div key={friend.id} className="p-2 shadow-lg rounded-lg">
                      <img
                        className=" rounded-lg h-20 w-20"
                        src={friend.profilePicture}
                        alt=""
                      />
                      <h1 className="text-sm">{friend.UserName}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

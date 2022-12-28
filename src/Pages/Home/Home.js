import React from "react";
import Feed from "../../component/Feed";
import LeftBar from "../../component/LeftBar";
import RightBar from "../../component/RightBar";
import "./Home.css";
const Home = () => {
  return (
    <div className="flex ">
      <div className="basis-1/4 h-[calc(100vh-50px)] overflow-y-scroll">
        <LeftBar></LeftBar>
      </div>
      <div className="basis-1/2 w-[100vh]">
        <Feed></Feed>
      </div>
      <div className="basis-1/4 w-[100vh]">
        <RightBar></RightBar>
      </div>
    </div>
  );
};

export default Home;

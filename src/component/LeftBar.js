import React from "react";
import user1 from "../assets/person/2.jpeg";
import user2 from "../assets/person/3.jpeg";
import user3 from "../assets/person/4.jpeg";
import user4 from "../assets/person/5.jpeg";
import user5 from "../assets/person/6.jpeg";
import user6 from "../assets/person/7.jpeg";
import {
  FaRss,
  FaFacebookMessenger,
  FaPlayCircle,
  FaUsers,
  FaBookmark,
  FaQuestionCircle,
  FaBriefcase,
  FaCalendarDay,
  FaGraduationCap,
} from "react-icons/fa";
const LeftBar = () => {
  return (
    <div className=" p-4 ">
      <ul>
        <li className="flex items-center mb-5">
          <FaRss className="text-2xl mr-4" />
          <span>Feed</span>
        </li>
        <li className="flex items-center mb-5">
          <FaFacebookMessenger className="text-2xl mr-4" />
          <span>Chat</span>
        </li>
        <li className="flex items-center mb-5">
          <FaPlayCircle className="text-2xl mr-4" />
          <span>videos</span>
        </li>
        <li className="flex items-center mb-5">
          <FaUsers className="text-2xl mr-4" />
          <span>groups</span>
        </li>
        <li className="flex items-center mb-5">
          <FaBookmark className="text-2xl mr-4" />
          <span>BookMarks</span>
        </li>
        <li className="flex items-center mb-5">
          <FaQuestionCircle className="text-2xl mr-4" />
          <span>Quesstions</span>
        </li>
        <li className="flex items-center mb-5">
          <FaBriefcase className="text-2xl mr-4" />
          <span>Jobs</span>
        </li>
        <li className="flex items-center mb-5">
          <FaCalendarDay className="text-2xl mr-4" />
          <span>Events</span>
        </li>
        <li className="flex items-center mb-5">
          <FaGraduationCap className="text-2xl mr-4" />
          <span>Courses</span>
        </li>
      </ul>
      <button className="btn btn-sm btn-primary">Show More</button>
      <hr className="mt-5" />
      <ul>
        <li className="flex gap-3 mb-5">
          <img className="w-10 rounded-full" src={user1} alt="" />
          <span className=" flex justify-center items-center">Alexa dalh</span>
        </li>
        <li className="flex gap-3 mb-5">
          <img className="w-10 rounded-full" src={user1} alt="" />
          <span className=" flex justify-center items-center">Alexa dalh</span>
        </li>
        <li className="flex gap-3 mb-5">
          <img className="w-10 rounded-full" src={user1} alt="" />
          <span className=" flex justify-center items-center">Alexa dalh</span>
        </li>
        <li className="flex gap-3 mb-2">
          <img className="w-10 rounded-full" src={user1} alt="" />
          <span className=" flex justify-center items-center">Alexa dalh</span>
        </li>
        <li className="flex gap-3 mb-2">
          <img className="w-10 rounded-full" src={user1} alt="" />
          <span className=" flex justify-center items-center">Alexa dalh</span>
        </li>
      </ul>
    </div>
  );
};

export default LeftBar;

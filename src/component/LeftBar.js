import React from "react";
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
import { Users } from "../FalseData";
import AllFriend from "./AllFriend";

const leftBarData = [
  {
    id: 1,
    icon: <FaRss />,
    name: "Feed",
  },
  {
    id: 2,
    icon: <FaFacebookMessenger />,
    name: "Chat",
  },
  {
    id: 3,
    icon: <FaPlayCircle />,
    name: "Videos",
  },
  {
    id: 4,
    icon: <FaUsers />,
    name: "Groups",
  },
  {
    id: 5,
    icon: <FaBookmark />,
    name: "BookMarks",
  },
  {
    id: 6,
    icon: <FaQuestionCircle />,
    name: "Questions",
  },
  {
    id: 7,
    icon: <FaBriefcase />,
    name: "Jobs",
  },

  {
    id: 9,
    icon: <FaCalendarDay />,
    name: "Events",
  },
  {
    id: 10,
    icon: <FaGraduationCap />,
    name: "Courses",
  },
];

const LeftBar = () => {
  return (
    <div className=" p-4 ">
      <ul>
        {leftBarData.map((data) => (
          <li key={data.id} className="flex items-center mb-5">
            <icon className="text-2xl mr-4">{data.icon}</icon>
            <span>{data.name}</span>
          </li>
        ))}
      </ul>
      <button className="btn btn-sm btn-primary">Show More</button>
      <hr className="m-5" />
      <ul>
        {Users.map((user) => (
          <AllFriend key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default LeftBar;

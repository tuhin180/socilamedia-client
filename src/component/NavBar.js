import React from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUserAlt,
  FaBell,
  FaFacebookMessenger,
} from "react-icons/fa";
import user from "../assets/person/3.jpeg";
const NavBar = () => {
  return (
    <div className="grid grid-cols-3  gap-3 bg-primary p-4">
      <div>
        <Link to="/" className="text-xl ml-8 text-white cursor-pointer  ">
          SocialMedia
        </Link>
      </div>
      <div className="bg-white rounded-full flex">
        <FaSearch className="mt-3 ml-3" />
        <input
          className=" ml-3 w-full rounded-full border-none focus:outline-none p-2"
          type="text"
          placeholder="search your friend and videos"
        />
      </div>
      <div className="mt-2 md:ml-8">
        <ul className="flex gap-3 text-white ">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Timeline</Link>
          </li>
          <li className="flex md:ml-3 ">
            <FaUserAlt className="text-xl " />
            <span className=" -mt-2 bg-red-500 px-1 py-0 mb-4 rounded-full">
              3
            </span>
          </li>
          <li className="flex ">
            <FaBell className="text-xl " />
            <span className=" -mt-2 bg-red-500 px-1 py-0 mb-4 rounded-full">
              1
            </span>
          </li>
          <li className="flex ">
            <FaFacebookMessenger className="text-xl " />
            <span className=" -mt-2 bg-red-500 px-1 py-0 mb-4 rounded-full">
              5
            </span>
          </li>
          <li className="md:ml-4">
            <img
              src={user}
              className="w-8 h-8 rounded-full object-cover "
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

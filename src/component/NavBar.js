import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUserAlt,
  FaBell,
  FaFacebookMessenger,
} from "react-icons/fa";

import { AuthUserContext } from "../Context/UserContext";
const NavBar = () => {
  const { user, userLogout } = useContext(AuthUserContext);
  console.log(user);
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
            <Link to="/">Home</Link>
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
          {user?.email ? (
            <>
              <li className="md:ml-4">
                <Link to="/profile">
                  <img
                    src={user?.photoURL}
                    className="w-8 h-8 rounded-full object-cover "
                    alt=""
                  />
                </Link>
              </li>
              <li>
                <Link>
                  <button
                    onClick={userLogout}
                    className="btn btn-primary btn-xs"
                  >
                    LogOut
                  </button>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <button className="btn btn-primary btn-sm">Login</button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

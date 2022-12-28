import React from "react";
import user from "../../assets/person/2.jpeg";
import {
  FaRegImages,
  FaBookmark,
  FaMapMarkerAlt,
  FaGrinAlt,
} from "react-icons/fa";
const SharePost = () => {
  return (
    <div className="shadow-xl p-4 rounded-xl w-11/12 mx-auto ">
      <div className="flex gap-3">
        <img className="w-14 h-14 rounded-full" src={user} alt="" />
        <input
          className="w-full focus:outline-none"
          type="text"
          placeholder="Whats on your mind alex?"
        />
      </div>
      <div className="m-5 border-t-[3px] "></div>
      <div className="flex gap-4">
        <ul className="flex gap-2 mb-2">
          <li className="flex gap-1">
            <FaRegImages className="text-rose-600 text-2xl" />
            <span className="font-semibold">Photo or Video</span>
          </li>
          <li className="flex gap-1">
            <FaMapMarkerAlt className="text-green-500 text-2xl" />
            <span className="font-semibold">Location</span>
          </li>
          <li className="flex gap-1">
            <FaBookmark className="text-blue-600 text-2xl" />
            <span className="font-semibold">Tag</span>
          </li>
          <li className="flex gap-1">
            <FaGrinAlt className="text-yellow-500 text-2xl" />
            <span className="font-semibold">Feelings</span>
          </li>
          <li className="flex gap-1 ml-14">
            <button className="btn btn-sm  btn-primary ">Share Post</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SharePost;

import React from "react";
import Post from "./Shared/Post";
import SharePost from "./Shared/SharePost";
import { posts } from "../FalseData";
const Feed = () => {
  return (
    <>
      <SharePost />

      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default Feed;

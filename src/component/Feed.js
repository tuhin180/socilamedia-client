import React from "react";
import Post from "./Shared/Post";
import SharePost from "./Shared/SharePost";
import { posts } from "../FalseData";
import Spinner from "./Spinner/Spinner";
import { useQuery } from "@tanstack/react-query";
const Feed = () => {
  const {
    isLoading,
    error,
    data: Posts,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:5000/post").then((res) => res.json()),
  });

  if (isLoading) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;
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

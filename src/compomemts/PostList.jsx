import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts}) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>список</h1>
      {posts.map((el) => (
        <PostItem posts={el} key={el.id} />
      ))}
    </>
  );
};

export default PostList;

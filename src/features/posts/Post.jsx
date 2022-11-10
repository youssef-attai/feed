import React from "react";
import Reactions from "./Reactions";

const Post = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <Reactions post={post} />
    </div>
  );
};

export default Post;

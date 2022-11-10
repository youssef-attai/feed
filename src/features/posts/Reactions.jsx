import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { UserContext } from "../users/UserContext";
import { react } from "./postsSlice";

const reactions = {
  like: "👍",
  love: "😍",
  haha: "😆",
  wow: "😮",
  sad: "😞",
  angry: "😠",
};

const Reactions = ({ post }) => {
  const currentUser = useContext(UserContext);
  const dispatch = useDispatch();

  console.log(post);

  return (
    <div>
      {Object.entries(reactions).map(([name, emoji]) => (
        <button
          key={name}
          onClick={() => {
            dispatch(
              react({
                postId: post.postId,
                reaction: name,
                userId: Number(currentUser),
              })
            );
          }}
        >
          {emoji}
          {post.reactions[name].length}
        </button>
      ))}
    </div>
  );
};

export default Reactions;

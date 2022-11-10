import { current } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./features/posts/Post";
import { addPost, selectPosts } from "./features/posts/postsSlice";
import { UserContext } from "./features/users/UserContext";
import {
  newUser,
  selectCurrentUser,
  selectMaxUser,
  switchUser,
} from "./features/users/usersSlice";

const App = () => {
  const posts = useSelector(selectPosts);
  const currentUser = useSelector(selectCurrentUser);
  const maxUser = useSelector(selectMaxUser);
  const dispatch = useDispatch();

  return (
    <UserContext.Provider value={currentUser}>
      <h3>
        Current user ID:{" "}
        <input
          type={"number"}
          max={maxUser}
          min={0}
          value={currentUser}
          onChange={(e) => {
            dispatch(switchUser(e.target.value));
          }}
        />
        <button
          onClick={() => {
            dispatch(newUser());
          }}
        >
          New user
        </button>
      </h3>
      <button
        onClick={() => {
          dispatch(addPost("post title", "post content", 1));
        }}
      >
        Add post
      </button>
      <div>
        {posts.map((post) => (
          <Post key={post.postId} post={post} />
        ))}
      </div>
    </UserContext.Provider>
  );
};

export default App;

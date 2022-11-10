import { createSlice, nanoid } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            postId: nanoid(),
            title,
            content,
            userId,
            reactions: {
              like: [],
              love: [],
              haha: [],
              wow: [],
              sad: [],
              angry: [],
            },
          },
        };
      },
    },
    react: (state, action) => {
      const { postId, reaction, userId } = action.payload;
      const post = state.find((post) => post.postId === postId);
      const idx = post.reactions[reaction].indexOf(userId);
      if (idx > -1) post.reactions[reaction].splice(idx, 1);
      else post.reactions[reaction].push(userId);
    },
  },
});

export const selectPosts = (state) => state.posts;
export const { addPost, react } = postsSlice.actions;
export default postsSlice.reducer;

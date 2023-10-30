import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: ['ballings', 'games'] };

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {

      state.value.push(action.payload)
    },
    removePost: (state, action) => {

      state.value.splice(action.payload, 1)
    },
  },
});


export const {addPost, removePost} = postSlice.actions;

export default postSlice.reducer;

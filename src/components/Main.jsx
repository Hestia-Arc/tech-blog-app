import React, { useState } from "react";
import { addPost } from "../features/postSlice";
import { useDispatch } from "react-redux";

function Main() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addPost(input));

    setInput('')
  };

  return (
    <div
      style={{
        background: "orange",
        flex: 7,
        height: "30rem",
        padding: "1rem",
      }}
    >
      <input
        type="text"
        placeholder="type a value"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />{" "}
      <br />
      <button onClick={handleSubmit}>Add New Post</button>
    </div>
  );
}

export default Main;

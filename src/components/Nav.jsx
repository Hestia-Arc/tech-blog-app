import React from "react";
import { useSelector } from "react-redux";

function Nav() {
  const posts = useSelector((state) => state.posts.value);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        background: "#ebebeb",
      }}
    >
      <div>BlogE</div>
      <div>Total: {posts.length} </div>
    </div>
  );
}

export default Nav;

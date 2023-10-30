import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePost } from "../features/postSlice";

function SideBar() {
    const [edit, setEdit] = useState(false);

  const posts = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        background: "seagreen",
        flex: 5,
        marginLeft: "2rem",
        padding: "1rem",
      }}
    >
      {posts.map((post, i) => {
        // const [input, setInput] = useState("");

        const handleClick = (index) => {
          console.log(index);
          dispatch(removePost(index));
        };

        const handleEdit = (index) => {
          console.log(index);

          setEdit(true);
          // dispatch(removePost(index));
        };

        return (
          <div
            style={{
              minHeight: "2rem",
              padding: "10px",
              background: "#ebebeb",
              marginBlockEnd: "1rem",
              display: "flex",
              justifyContent: "space-between",
            }}
            key={i}
          >
            <div style={{flex: 1}}>
              <small>New post alert!</small> <br/>
              {edit ? (
                <>
                  <input />
                  <button onClick={() => handleEdit(i)}>Done</button>
                </>
              ) : (
                <h3>{post}</h3>
              )}
            </div>

            <div style={{flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
              <button onClick={() => handleEdit(i)} style={{display: edit ? 'none' : 'block'}}>Edit</button>
              <button
                onClick={() => handleClick(i)}
                style={{ marginLeft: "5px" }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;

import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <Nav />
      <div style={{ display: "flex", margin: "1rem" }}>
        <Main />
        <SideBar />
      </div>
    </>
  );
}

export default App;

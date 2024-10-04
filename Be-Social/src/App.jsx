import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import Side from "./Component/Sidebar";
function App() {
  return (
    <>
      <Header></Header>
      <Side></Side>
    </>
  );
}

export default App;

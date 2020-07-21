import React from "react";
import "./App.css";
import Logo from "./assets/Logo-M6.png";
import data from "./assets/programmes.json";
import Programme from "./components/Programme";

function App() {
  return (
    <div className="container">
      <img src={Logo} alt="" className="logo"></img>
      {data.map((programmeTv, index) => {
        // console.log(programmeTv);
        return (
          <Programme
            className="programme"
            key={index}
            programmeTv={programmeTv}
          ></Programme>
        );
      })}
    </div>
  );
}

export default App;

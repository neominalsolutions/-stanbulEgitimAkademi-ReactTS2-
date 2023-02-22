import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

function App() {
  const btn1Click = () => {
    alert("button1 clicked");
  };

  const btn2Click = () => {
    alert("button2 clicked");
  };

  return (
    <div className="App">
      {/* new Button(); */}
      {/* var btn = new Button()
          btn.name = "Button1";
      */}
      <Button
        name="Button1"
        color="yellow"
        onClicked={btn1Click}
        onMouseOut={() => {
          alert("Mouse out oldu");
        }}
      />
      {/* kendi componentimize tıklandığını anlamak için props vasıtası ile event dinledik. */}
      <Button
        name="Button2"
        bgColor="green"
        color="white"
        onClicked={btn2Click}
      />
      <p title="başlık"></p>
      <div id="1"></div>
      {/* <button onclick=""></button> */}
    </div>
  );
}

export default App;

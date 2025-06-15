import styles from "./App.module.css";
import Input from "./components/Input.jsx";
import Buttons from "./components/Buttons.jsx";
import Heading from "./components/Heading.jsx";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const buttonClick = (button) => {
    if (button === "C") {
      let newCalVal = "";
      setCalVal(newCalVal);
    } else if (button === "=") {
      let newCalVal = eval(calVal) ;
      setCalVal(newCalVal);
    } else if (button === "⌫") {
      let newCalVal = calVal.slice(0,-1) ;
      setCalVal(newCalVal);
    }else {
      let newCalVal = calVal + button;
      setCalVal(newCalVal);
    }
  };
  return (
    <div className={styles.outerBox}>
      <Heading></Heading>
      <Input text={calVal}></Input>
      <Buttons buttonClick={buttonClick}></Buttons>
    </div>
  );
}

export default App;

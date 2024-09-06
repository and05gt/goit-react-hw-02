// import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import "./App.css";

const App = () => {
  // const [count, setCount] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });
  return (
    <>
      <Description />
      <Options />
      <Feedback />
    </>
  );
};

export default App;

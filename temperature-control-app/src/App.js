import { useState } from "react";
import "./index.css";
const TemperatureComp = () => {
  const [temp, setTemp] = useState(16);
  const [color, setColor] = useState("green");
  // const alert = temp > 19 ? "red" : "green";
  // useEffect(() => {
  //   console.log("Higher than expected");
  // }, [alert]);
  const increaseTemp = () => {
    // const newTempColor = temp <= 19 ? "green" : "red";
    const newTemp = temp + 1;
    if (newTemp > 19) {
      setColor("red");
    }
    setTemp(newTemp);
  };
  const decreaseTemp = () => {
    const newTemp = temp - 1;
    if (newTemp <= 19) {
      setColor("green");
    }
    setTemp(newTemp);
  };
  // const tempColor = () => {
  //   const newTempColor = temp <= 19 ? "green" : "red";
  //   setColor(newTempColor);
  //   console.log(newTempColor);
  // };

  return (
    <>
      <div style={{ backgroundColor: `${color}` }}>
        <h1>{temp}</h1>
        {/* <p>{color}</p> */}
        <button onClick={increaseTemp}>Increase</button>
        <button onClick={decreaseTemp}>Decrease</button>
      </div>
    </>
  );
};

export default TemperatureComp;

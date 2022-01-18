import React, { useState } from "react";

import "./App.css";
import { toastMaker, ToastContainer } from "react-toast-lib/dist";

function App() {
  const [type, setType] = useState("info");
  const [size, setSize] = useState("md");
  const [animation, setAnimation] = useState("fromTop");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [positionX, setX] = useState("end");
  const [positionY, setY] = useState("start");

  const handleClick = () => {
    const toast = {
      type: type,
      heading: heading,
      description: description,
      animation,
    };
    toastMaker(toast);
  };

  return (
    <>
      <div className="App">
        <button onClick={handleClick}>Toast</button>
        <label>
          Type
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option>info</option>
            <option>warning</option>
            <option>success</option>
            <option>error</option>
          </select>
        </label>
        <label>
          PositionX
          <select value={positionX} onChange={(e) => setX(e.target.value)}>
            <option>start</option>
            <option>end</option>
          </select>
        </label>
        <label>
          PositionY
          <select value={positionY} onChange={(e) => setY(e.target.value)}>
            <option>start</option>
            <option>end</option>
          </select>
        </label>
        <label>
          Size
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option>sm</option>
            <option>md</option>
            <option>lg</option>
          </select>
        </label>
        <label>
          Animation
          <select
            value={animation}
            onChange={(e) => setAnimation(e.target.value)}
          >
            <option>fromTop</option>
            <option>fromBottom</option>
            <option>fromRight</option>
            <option>fromLeft</option>
          </select>
        </label>
        <label>
          Heading
          <input value={heading} onChange={(e) => setHeading(e.target.value)} />
        </label>
        <label>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <ToastContainer
        positionX={positionX}
        positionY={positionY}
        toastSize={size}
      />
    </>
  );
}

export default App;

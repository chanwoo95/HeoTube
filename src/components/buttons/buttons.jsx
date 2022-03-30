import React, { useState } from "react";

const Buttons = ({ index }) => {
  const [currentIdx, setcurrentIdx] = useState(0);

  const prevBtn = () => {
    if (currentIdx < 0) {
      setcurrentIdx(5);
    } else {
      setcurrentIdx(currentIdx - 1);
    }
    index(currentIdx);
  };

  const nextBtn = () => {
    if (currentIdx > 5) {
      setcurrentIdx(0);
    } else {
      setcurrentIdx(currentIdx + 1);
    }
    index(currentIdx);
  };

  return (
    <div>
      <button onClick={prevBtn}>prev</button>
      <button onClick={nextBtn}>next</button>
    </div>
  );
};

export default Buttons;

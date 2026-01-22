import React from "react";

const Prac1 = () => {
  let arry = ["mounish", "vishal", "varun"];

  return (
    <div>
      {arry.map((item) => (
        <h1>{item}</h1>
      ))}
      ;
    </div>
  );
};

export default Prac1;

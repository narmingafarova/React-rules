import React from "react";
import PropExample from "../PropExample";

const Child = () => {
  return <p>Child component</p>;
};

function FunctionalBasedComponent() {
  // const parentComponentHandler = () => {
  //   console.log("Parent component");
  // };

  const getValueFromChildComponent = (value) => {
    console.log(value);
  };

  return (
    <div>
      <Child /> Functional js
      {/* <PropExample
        parentComponentHandler={parentComponentHandler}
        flag={false}
        data="data is props"
      /> */}
      <PropExample getValueFromChildComponent={getValueFromChildComponent} />
    </div>
  );
}

export default FunctionalBasedComponent;

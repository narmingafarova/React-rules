import React from "react";

const PropExample = (props) => {
  // const {flag, data, parentComponentHandler} = props;
  const { getValueFromChildComponent } = props;

  const handleClick = () => {
    const count = 1;
    getValueFromChildComponent(count + 1);
  };

  return (
    <div>
      {/* {
               flag ? data : "flag is false"
           }
           <button onClick={parentComponentHandler}>Click</button> */}
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default PropExample;

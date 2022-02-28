import React from "react";

const Cells = (props) => {
  return (
    <div className="cells" onClick={props.onClick}>
    {props.value}
    </div>
  );
};

export default Cells;

import React from "react";
  
export default function ControlButtons(props) {
  const StartButton = (
    <div className="btn btn-one btn-start"
         onClick={props.handleStart}>
      ⯈
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two" 
           onClick={props.handleReset}>
        ↺
      </div>
      <div className="btn btn-one" 
           onClick={props.handlePauseResume}>
        {props.isPaused ? "⯈" : "II"}
      </div>
    </div>
  );
  
  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}
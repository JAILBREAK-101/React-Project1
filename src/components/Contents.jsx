import React from "react";

export default function Contents({ props }) {
  return (
    <div className="card" id={props.id}>
      <div className="header">
        <p>{props.title}</p>
        <p>{props.subTitle}</p>
      </div>
      <p className="content">{props.content}</p>
      <div className="item">
        <p className="item">
          {props.items} <span className="text">left</span>
        </p>
      </div>
      <button className="reward-button">
        {/*{"Select Reward" || { button }}*/}
        {props.button}
      </button>
    </div>
  );
}

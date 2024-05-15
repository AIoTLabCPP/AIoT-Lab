import React from "react"
import "../assets/css/outcomeItem.css"

export default function OutcomeItem({ img, text }) {
  return (
    <div className="outcome_item">
      <img src={img} style={{
        height: "240px",
        borderRadius: "5px",
      }}/>
      <div className="outcome_text">{text}</div>
    </div>
  );
}
import React from "react"
import "../assets/css/outcomeItem.css"

export default function OutcomeItem({ img, title, text }) {
  return (
    <div className="outcome_item">
      <img src={img} style={{
        height: "240px",
        borderRadius: "5px",
      }}/>
      <div className="text_wrapper">
        <div className="outcome_title">{title}</div>
        <div className="outcome_text">{text}</div>
      </div>
    </div>
  ); 
}
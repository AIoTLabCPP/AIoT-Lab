import React from "react"
import "../assets/css/outcomeItem.css"

export default function OutcomeItem({ img, title, text }) {
  return (
    <div className="outcome_item">
      <img className="outcome_img" src={img}/>
      <div className="text_wrapper">
        <div className="outcome_title">{title}</div>
        <div className="outcome_text">{text}</div>
      </div>
    </div>
  ); 
}
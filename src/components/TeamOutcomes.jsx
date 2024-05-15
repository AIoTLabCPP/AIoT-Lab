import React from "react"
import "../assets/css/teamOutcomes.css"
import OutcomeItem from "./OutcomeItem"

export default function Outcomes({ teamName, outcomes }) {
  return (
    <div className="outcome">
      <div className="title">{teamName}</div>
      <div className="info_box">
        {outcomes.map((outcome) => (
          <OutcomeItem img={outcome.img} outcome={outcome.text}/>
        ))} 
      </div>
    </div>
  )
}
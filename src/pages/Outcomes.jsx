import React from "react"
import NavBar from "../components/NavBar"
import "../assets/css/outcomes.css"
import TeamOutcomes from "../components/TeamOutcomes"

export default function Outcomes() {
  const outcomes = [
    { teamName: "AGILE CAR OUTCOMES", outcomes: [
      {img: "../assets/images/object_detection.jpg", outcome: "text"},
      {img: "../assets/images/object_detection.jpg", outcome: "text"}
    ]},

    { teamName: "DONKEY CAR OUTCOMES", outcomes: [
      {img: "../assets/images/object_detection.jpg", outcome: "text"},
      {img: "../assets/images/object_detection.jpg", outcome: "text"}
    ]},

    { teamName: "QCAR OUTCOMES", outcomes: [
      {img: "../assets/images/object_detection.jpg", outcome: "text"},
      {img: "../assets/images/object_detection.jpg", outcome: "text"}
    ]}
  ]

  return (
    <div>
      <NavBar />
      <div className="publications_wrapper">
        PUBLICATIONS
        <div className="publications">
          HI
        </div>
      </div>
      <div className="outcomes_wrapper">
          {outcomes.map((team, index) => (
          <TeamOutcomes key={index} 
            teamName={team.teamName} 
            outcomes={team.outcomes}/>
        ))}
      </div>
    </div>
  )
}
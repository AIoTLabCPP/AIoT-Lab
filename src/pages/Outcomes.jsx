import React from "react"
import NavBar from "../components/NavBar"
import "../assets/css/outcomes.css"
import TeamOutcomes from "../components/TeamOutcomes"
import { outcomesFile } from "../assets/data/outcomes"

export default function Outcomes() {
  const outcomes = outcomesFile

  return (
    <div>
      <NavBar />
      <div className="publications_wrapper">
        PUBLICATIONS
        <div className="publications">
          publications
        </div>
      </div>
      <div className="outcomes_wrapper">
        OUTCOMES
        <div className="outcomes">
          {outcomes.map((team, index) => (
            <TeamOutcomes key={index} 
              teamName={team.teamName} 
              outcomes={team.outcomes}/>
          ))}
        </div>
          
      </div>
    </div>
  )
}
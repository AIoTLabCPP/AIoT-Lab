import React from "react"
import NavBar from "../components/NavBar"
import "../assets/css/software.css"
import TeamOutcomes from "../components/TeamOutcomes"
import { outcomesFile } from "../assets/data/outcomes"

export default function Outcomes() {
  const outcomes = outcomesFile;

  return (
    <div>
      <NavBar />
      <div className="outcomes_wrapper">
        SOFTWARE OUTCOMES
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

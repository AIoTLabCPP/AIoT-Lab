import React from "react"
import NavBar from "../components/NavBar"
import "../assets/css/outcomes.css"
import TeamOutcomes from "../components/TeamOutcomes"
import { outcomesFile } from "../assets/data/outcomes"
import { publicationsFile } from "../assets/data/publications"
import PublicationItem from "../components/PublicationItem"

export default function Outcomes() {
  const outcomes = outcomesFile;
  const publications = publicationsFile;

  return (
    <div>
      <NavBar />
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
      <div className="publications_wrapper">
        PUBLICATIONS
        <div className="publications">
          {publications.map((publication, index) => (
            <PublicationItem key={index} publication={publication.publication} />
          ))}
        </div>
      </div>
    </div>
  )
}

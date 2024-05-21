import React from "react"
import "../assets/css/publications.css"
import { books, conferencePapers, journalPapers } from "../assets/data/publications"
import PublicationItem from "../components/PublicationItem"
import NavBar from "../components/NavBar";

export default function Publications() {
  return (
    <div>
      <NavBar/>
      <div className="publications_wrapper">
        <div className="books">
          Book and Book Chapter
          <div className="publications">
            {books.map((publication, index) => (
              <PublicationItem key={index} publication={publication.publication} />
            ))}
          </div>
        </div>

        <div className="conference">
          Conference Papers
          <div className="publications">
            {conferencePapers.map((publication, index) => (
              <PublicationItem key={index} publication={publication.publication} />
            ))}
          </div>
        </div>

        <div className="journal">
          Journal Papers
          <div className="publications">
            {journalPapers.map((publication, index) => (
              <PublicationItem key={index} publication={publication.publication} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
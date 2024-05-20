import React from "react"
import "../assets/css/publications.css"
import { publicationsFile } from "../assets/data/publications"
import PublicationItem from "../components/PublicationItem"
import NavBar from "../components/NavBar";

const publications = publicationsFile;

export default function Publications() {
  return (
  <div>
    <NavBar/>
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
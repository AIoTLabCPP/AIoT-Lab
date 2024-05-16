import React from "react"
import "../assets/css/publicationItem.css"

export default function PublicationItem({ publication }) {
  return (
    <div className="publication_item"><li>{publication}</li><br /></div>
  )
}
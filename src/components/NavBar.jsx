import React from "react"
import "../assets/css/navBar.css"

export default function navBar() {
  return (
    <div className="navBar">
      <div className="icon items">icon</div>
      <div className="team items">
        <a href="/team">team</a>
      </div>
      <div className="outcomes items">outcomes</div>
      <div className="news items">news</div>
    </div>
  )
}

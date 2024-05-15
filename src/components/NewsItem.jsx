import React from "react"

export default function NewsItem({ event, date, description }) {
  return (
    <div className="news_item_wrapper">
        <div className="event">event</div>
        <div className="date">date</div>
        <div className="description">description</div>
    </div>
  )
}
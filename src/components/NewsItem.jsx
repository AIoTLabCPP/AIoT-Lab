import React from "react"
import "../assets/css/newsItem.css"

export default function NewsItem({ event, date, description }) {
  return (
    <div className="news_item_wrapper">
      <div className="top_info">
        <div className="event">{event}</div>
        <div className="date">{date}</div>
      </div>
      <div className="description">{description}</div>
    </div>
  )
}
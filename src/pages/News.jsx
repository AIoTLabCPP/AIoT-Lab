import React from "react";
import NavBar from "../components/NavBar";
import "../assets/css/news.css";
import NewsItem from "../components/NewsItem";
import { newsFile } from "../assets/data/news"

export default function News() { 
  const newsList = newsFile;

  return (
    <div>
      <NavBar />
      <div className="news_wrapper">
        NEWS
        <div className="news_section">
          {newsList.map((news, index) => (
            <NewsItem
              key={index}
              event={news.event}
              date={news.date}
              description={news.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

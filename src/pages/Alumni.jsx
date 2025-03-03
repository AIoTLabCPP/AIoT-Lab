import React from "react";
import NavBar from "../components/NavBar";
import "../assets/css/alumni.css"
 
export default function Alumni() { 

  return (
    <body>
      <NavBar/>
      <div className="container">
          <div className="card">
            <img src="src\assets\images\profiles\brandon_headshot.jpg" className="profiles" />
            <a href="https://www.linkedin.com/in/chaobrandon/" className="information_text">
              <strong>Brandon Chao</strong>
            </a>
            <div className="information_text">
              QCar Team Lead
            </div>
          </div>

          <div className="card">
            <img src="src\assets\images\profiles\lee_calvin.jpg" className="profiles" />
            <a href="https://www.linkedin.com/in/chunchenglee326/" className="information_text">
              <strong>Calvin Lee</strong>
            </a>
            <div className="information_text">
              QCar Lane Detection Algorithm
            </div>
          </div>

          <div className="card">
            <img src="src\assets\images\profiles\peabody_jack.jpg" className="profiles" />
            <a href="https://www.linkedin.com/in/jack-peabody/" className="information_text">
              <strong>Jack Peabody</strong>
            </a>
            <div className="information_text">
              Agile Car Team Lead
            </div>
          </div>

          <div className="card">
            <img src="src\assets\images\profiles\trinh_phong.png" className="profiles" />
            <a href="https://www.linkedin.com/in/phong-d-trinh/" className="information_text">
              <strong>Phong Trinh</strong>
            </a>
            <div className="information_text">
              QCar Object Detection Avoidance
            </div>
          </div>

          <div className="card">
            <img src="src\assets\images\profiles\hu_huijun.jpg" className="profiles" />
            <a href="https://www.linkedin.com/in/huijun-hu-28045716a/" className="information_text">
              <strong>Tracy Hu</strong>
            </a>
            <div className="information_text">
              Agile Car Perception Team
            </div>
          </div>
        </div>
    </body>
  );
}

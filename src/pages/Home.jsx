import { useEffect, useState } from 'react';
import NavBar from "../components/NavBar"
import "../assets/css/home.css"
import Slideshow from "../components/Slideshow"
import team_photo from '../assets/images/team_photo.jpg';
import donkey_car_photo from '../assets/images/donkey_car_team.jpg';
import donkey_car from '../assets/images/donkey_car.jpg';
import presentation_photo from '../assets/images/presentation_photo.jpg';
import agile_presentation_photo from '../assets/images/agile_car_presentation.jpg';
import nsflogo from '../assets/images/NSF_logo.png';

export default function home() {
  const images = [team_photo, donkey_car_photo, donkey_car, presentation_photo, agile_presentation_photo]; 

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); 

  return (
    <div className="home">
      <NavBar/>
      <div className="main-content">
        <div className='image'></div>
        <div className='main_title fadein fadein-visible'>
          AIOT LAB
        </div>
        <div className='main_subtext fadein fadein-visible'>
          Looking forward to a better future on the road.
        </div>
        <div className='project_header hidden'>
          WHO WE ARE
        </div>
        <div className='project_description hidden'>
          [TEMPORARY TEXT] <br />
        </div>
        <div className='dot_menu hidden'>
          &hellip;
        </div>
        <div className='slideshow'>
          <Slideshow images={images} />
        </div>
        <div className='sponsors'>
          SPONSORS
          <div className='images'>
            <img src={nsflogo} alt="NSF logo" style={{ width: '30vh', height: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
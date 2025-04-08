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
          Shaping a smarter, more connected future through AI and IoT innovations.
        </div>
        <div className='project_header hidden'>
          WHO WE ARE
        </div>
        <div className='project_description hidden'>
          Welcome to the Artificial Intelligence of Things (AIoT) Lab at Cal Poly Pomona, led by Dr. Yunsheng Wang. 
          Our lab is at the forefront of integrating artificial intelligence with the Internet of Things (IoT) to pioneer advancements in smart technologies and systems. <br/>
          
          <br /> <strong>About the AIoT Lab</strong> <br />
          The AIoT Lab is dedicated to the research and development of innovative solutions that combine the capabilities of AI and IoT. Our interdisciplinary team works on 
          a variety of projects aimed at enhancing connectivity, intelligence, and efficiency in various applications, including connected and autonomous driving, edge computing, 
          vehicle cybersecurity, and intelligent transportation systems. <br />
          
          <br /> <strong>Research Focus</strong> <br />
          Our primary research areas include: <br />
          
          <ul>
            <li><strong>Intelligent Sensor Networks:</strong> Developing smart sensors and networks that can autonomously collect, process, and analyze data in real-time. <br /></li>
            
            <li><strong>Edge and Cloud Computing:</strong> Exploring efficient computational frameworks that leverage both edge and cloud resources to optimize AIoT systems. <br /></li>
            
            <li><strong>Machine Learning and Data Analytics:</strong> Applying advanced machine learning techniques to extract meaningful insights from vast amounts of IoT data. <br /></li>
            
            <li><strong>Cyber-Physical Systems:</strong> Creating integrated systems that seamlessly combine physical processes with computational resources. <br /></li>
            
            <li><strong>Security and Privacy:</strong> Ensuring robust security measures and privacy protections for AIoT systems and data. <br /></li>
          </ul>
          
          <br /><strong>Current Projects</strong> <br />
          Our lab is engaged in several cutting-edge projects, such as: <br />
          
          <ul>
            <li><strong>Connected and Autonomous Driving:</strong> Developing AI-driven technologies to enhance the safety, efficiency, and reliability of connected and autonomous vehicles. 
            This project focuses on advanced sensor integration, real-time data processing, and machine learning algorithms to enable vehicles to navigate and interact with their 
            environment autonomously. <br /></li>
            
            <li><strong>Edge Computing:</strong> We developed a TCP/UDP link between a DonkeyCar and Jetson AGX Orin edge server device. Video frames are streamed to the Orin device, and the Orin can pass these frames to different self-driving models to compute the steering and throttle values to send back to the DonkeyCar. <br /></li>
            
            <li><strong>Vehicle Cybersecurity:</strong> Investigating robust cybersecurity measures to protect connected vehicles from potential threats and vulnerabilities. This project 
            involves developing advanced encryption methods, intrusion detection systems, and secure communication protocols to ensure the safety and integrity of vehicular 
            networks. <br /></li>
            
            <li><strong>Intelligent Transportation Systems:</strong> Creating smart transportation solutions that leverage AI and IoT to optimize traffic flow, reduce congestion, and enhance 
            overall transportation efficiency. This project focuses on integrating real-time traffic data, predictive analytics, and automated control systems to improve urban
            mobility and safety. <br /></li>
          </ul>
          
          
          <br /> <strong>Collaboration and Partnerships</strong> <br />
          The AIoT Lab actively collaborates with industry partners, government agencies, and academic institutions to drive research and innovation. We offer opportunities 
          for joint research projects, internships, and knowledge exchange programs. <br />
          
          <br /> <strong>Join Us</strong> <br />
          We welcome students, researchers, and industry professionals who are passionate about AI and IoT to join our lab. Whether you are interested in conducting groundbreaking 
          research, pursuing a thesis, or collaborating on innovative projects, the AIoT Lab provides a stimulating environment to explore and develop your ideas. <br />
          
          <br /> <strong>Contact Us</strong> <br />
          For more information about the AIoT Lab, our research, and opportunities to collaborate, please contact Dr. Yunsheng Wang at <u>yunshengwang@cpp.edu</u>. <br />
        </div>
        <div className='dot_menu hidden'>
          &hellip;
        </div>
        <div className='slideshow'>
          <Slideshow images={images} />
        </div>
        <div className='sponsor_wrapper'>
          <div className='sponsors_title'>
            SPONSORS
          </div>
          <div className='sponsor_img_wrapper'>
            <img className='sponsor_img' src={nsflogo} alt="NSF logo" />
          </div>
        </div>
      </div>
    </div>
  )
}
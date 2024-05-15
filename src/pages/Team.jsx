import React from "react"
import NavBar from "../components/NavBar"
import "../assets/css/team.css"

export default function Team() {
  return (
    <div className="team">
      <NavBar/>
      {/* FACULTY */}
      <div className='section'>
        <div className='section_title' style={{
            paddingTop: '80px'
        }}>
          FACULTY
        </div>
        <div className="profile_image" style={{ 
          backgroundImage: `url(../assets/images/profiles/wang_yunsheng.jpg)`,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
        </div>
        <a href="https://www.linkedin.com/in/yunsheng-wang-37297517/" className="information" style={{
          margin: 'auto',
          paddingTop: '10px',
          paddingBottom: '30px'
        }}>
          Professor Yunsheng Wang
        </a>
      </div>

      {/* AGILE CAR TEAM */}
      <div className='section' style= {{
          backgroundColor: '#485B51'
      }}>   
        <div className='section_title'>
          AGILE CAR TEAM
        </div>
        <div className='team_description'>
          Agile car team description
        </div>
        <div className='subtitle'> 
          Graduate Students
        </div>
      </div>


      {/* DONKEY CAR TEAM */}
      <div className='section' style= {{
          backgroundColor: '#758C85'
      }}>   
        <div className='section_title'>
          DONKEY CAR TEAM
        </div>
        <div className='team_description'>
          To develop an accurate and efficient autonomous driving software that utilizes the latest breakthroughs in <br /> 
          machine learning and edge computing
        </div>
        <div className='subtitle'> 
          Undergraduate Students
          <div className="profile_container" style={{
              paddingLeft: '30vw',
              paddingRight: '30vw'
          }}>
            <div className='profile_image' style={{ 
              backgroundImage: `url(../assets/images/profiles/sanna_alex.jpg)`, 
            }}> </div>
            <div className='profile_image' style={{ 
              backgroundImage: `url(../assets/images/profiles/michael.jpg)`, 
            }}> </div>
          </div>
          <div className="profile_container"style={{
            paddingTop: '10px',
            paddingLeft: '30vw',
            paddingRight: '30vw'
          }}>
            <a href="https://www.linkedin.com/in/alex-sanna-428804215/" className="information"> <strong>Alex Sanna</strong> </a>
            <a href="https://www.linkedin.com/in/michael-ly-swe/" className="information"> <strong>Michael Ly</strong> </a>
          </div>
          <div className="profile_container"style={{
            paddingLeft: '30vw',
            paddingRight: '30vw'
          }}>
            <div className="information">Team Lead</div>
            <div className="information">Team Lead</div>
          </div>
          <div className="profile_container" style={{
            paddingLeft: '20vw',
            paddingRight: '20vw'
          }}>
          <div className='profile_image' style={{ 
              backgroundImage: `url(../assets/images/profiles/sheth_darshil.jpg)`, 
            }}> </div>
            <div className='profile_image' style={{ 
              backgroundImage: `url(../assets/images/profiles/hoang_nicholas.jpg)`, 
            }}> </div>
            <div className='profile_image' style={{ 
              backgroundImage: `url(../assets/images/profiles/cursaro_sebastian.jpg)`, 
            }}> </div>
          </div>
          <div className="profile_container"style={{
            paddingTop: '10px',
            paddingLeft: '25.85vw',
            paddingRight: '24.5vw'
          }}>
            <a href="https://www.linkedin.com/in/darshilsheth/" className="information" style={{
            }}> 
              <strong>Darshil Sheth</strong> 
            </a>
            <a href="https://www.linkedin.com/in/nicholas-hoang-7b1644235/" className="information" style={{
              margin: 'auto',
              paddingLeft: '1.75vw'
            }}> 
              <strong>Nicholas Hoang</strong> 
            </a>
            <a href="https://www.linkedin.com/in/sebastian-cursaro-483425268/" className="information" style={{
            }}> 
              <strong>Sebastian Cursaro</strong> 
            </a>
          </div>
        </div>
      </div>

      {/* ALUMNI */}
      <div className='section' style= {{
          height: '100vh',
          backgroundColor: '#737259'
      }}>   
          
      </div>
    </div>
  )
}
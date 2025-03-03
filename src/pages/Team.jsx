import React, { useState } from "react"
import NavBar from "../components/NavBar"
import "../assets/css/team.css"
import * as profileImages from "../assets/data/profiles";

export default function Team() {
  const [windowWidth] = useState(window.innerWidth);
  const isSmallScreen = windowWidth <= 768 ? true : false;

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
          backgroundImage: `url(${profileImages.wang_yunsheng})`,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
        </div>
        <a href="https://www.linkedin.com/in/yunsheng-wang-37297517/" className="information" style={{
          margin: 'auto',
          paddingTop: '10px',
          paddingBottom: '3vh'
        }}>
          <strong>Professor Yunsheng Wang</strong>
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
          To build out a robust autonomy stack for the Scout Mini platform, towards service robot applications.
        </div>

        <div className='subtitle'> 
          Graduate Students
            
          <div className="profile_container" style={{
              paddingLeft: isSmallScreen? '20vw' : '30vw',
              paddingRight: isSmallScreen? '20vw' : '30vw'
          }}>
            <div className='profile_image' style={{ 
              backgroundImage: `url(${profileImages.peabody_jack})`, 
            }}> </div>

            <div className='profile_image' style={{ 
              backgroundImage: `url(${profileImages.khai_pau})`, 
            }}> </div>

          </div>

          <div className="profile_container"style={{
            paddingTop: '10px',
            paddingLeft: isSmallScreen ? '18.5vw' : '30vw',
            paddingRight: isSmallScreen ? '22vw' : '31vw',
          }}>
            <a href="https://www.linkedin.com/in/jack-peabody/" className="information"> <strong>Jack Peabody</strong> </a>
            <a href="https://www.linkedin.com/in/pau-sian-khai-5419858b/" className="information"> <strong>Pau Khai</strong> </a>
          </div>
          
          <div className="profile_container"style={{
            paddingLeft: isSmallScreen? '20vw' :'30vw',
            paddingRight: isSmallScreen? '20vw' : '30vw',
          }}>
            <div className="information">Team Lead</div>

            <div className="information">Team Lead</div>

          </div>

          <div className="subtitle">
            Undergraduate Students
            <div className="profile_container" style={{
              paddingLeft: isSmallScreen? '3vw' : '10vw',
              paddingRight: isSmallScreen? '3vw' : '10vw'
            }}>
            <div className='profile_image' style={{ 
                backgroundImage: `url(${profileImages.estrada_joshua})`, 
              }}> </div>

              <div className='profile_image' style={{ 
                backgroundImage: `url(${profileImages.chung_justin})`, 
              }}> </div>

              <div className='profile_image' style={{ 
                backgroundImage: `url(${profileImages.gafafyan_sarkis})`, 
              }}> </div>

              <div className='profile_image' style={{ 
                backgroundImage: `url(${profileImages.hu_huijun})`, 
              }}> </div>

            </div>

            <div className="profile_container"style={{
              paddingTop: '10px',
              paddingLeft: isSmallScreen? '4vw' : '15.25vw',
              paddingRight: isSmallScreen? '8.5vw' : '17.25vw',
            }}>
              <a href="https://www.linkedin.com/in/joshua-estrada22/" className="information"> 
                <strong>Joshua Estrada</strong> 
              </a>

              <a href="https://www.linkedin.com/in/justchung/" className="information" style={{
                margin: 'auto',
                paddingLeft: isSmallScreen? '2vw' : '5.75vw'
              }}> 
                <strong>Justin Chung</strong> 
              </a>

              <a href="https://www.linkedin.com/in/sarkisgafafyan/" className="information" style={{
                margin: 'auto',
                paddingRight: isSmallScreen? '4.5vw' : '7vw'
              }}> 
                <strong>Sarkis Gafafyan</strong> 
              </a>

              <a href="https://www.linkedin.com/in/huijun-hu-28045716a/" className="information"> 
                <strong>Tracy Hu</strong> 
              </a>

            </div>

            <div className="profile_container"style={{
              paddingLeft: isSmallScreen? '4vw' : '10vw',
              paddingRight: isSmallScreen? '2vw' : '9.25vw',
              paddingBottom: '3vh'
            }}>
            <div className="information">Control</div>

            <div className="information">Perception</div>

            <div className="information">Control</div>

            <div className="information">Perception</div>

          </div>
          </div>
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
              paddingLeft: isSmallScreen? '20vw' : '30vw',
              paddingRight: isSmallScreen? '20vw' : '30vw'
          }}>
            <div className='profile_image' style={{ 
              backgroundImage: `url(${profileImages.sanna_alex})`, 
            }}> </div>

            <div className='profile_image' style={{ 
              backgroundImage: `url(${profileImages.ly_michael})`, 
            }}> </div>

          </div>

          <div className="profile_container"style={{
            paddingTop: '10px',
            paddingLeft: isSmallScreen? '19.5vw' : '30vw',
            paddingRight: isSmallScreen? '20vw' : '30vw',
          }}>
            <a href="https://www.linkedin.com/in/alex-sanna-428804215/" className="information"> <strong>Alex Sanna</strong> </a>

            <a href="https://www.linkedin.com/in/michael-ly-swe/" className="information"> <strong>Michael Ly</strong> </a>

          </div>

          <div className="profile_container"style={{
            paddingLeft: isSmallScreen? '19.5vw' : '30vw',
            paddingRight: isSmallScreen? '20vw' : '30vw',
            paddingBottom: '3vh'
          }}>
            <div className="information">Team Lead</div>

            <div className="information">Team Lead</div>

          </div>

          <div className="profile_container" style={{
            paddingLeft: isSmallScreen? '10vw' : '20vw',
            paddingRight: isSmallScreen? '10vw' : '20vw'
          }}>
          <div className='profile_image' style={{ 
              backgroundImage: `url(${profileImages.sheth_darshil})`, 
            }}> </div>

            <div className='profile_image' style={{ 
              backgroundImage: `url(${profileImages.hoang_nicholas})`, 
            }}> </div>

            <div className='profile_image' style={{ 
              backgroundImage: `url(${profileImages.cursaro_sebastian})`, 
            }}> </div>

          </div>

          <div className="profile_container"style={{
            paddingTop: '10px',
            paddingLeft: isSmallScreen? '14vw' : '25.85vw',
            paddingRight: isSmallScreen? '11vw' : '24.5vw',
            paddingBottom: '3vh'
          }}>
            <a href="https://www.linkedin.com/in/darshilsheth/" className="information"> 
              <strong>Darshil Sheth</strong> 
            </a>

            <a href="https://www.linkedin.com/in/nicholas-hoang-7b1644235/" className="information" style={{
              margin: 'auto',
              paddingLeft: '3.5vw'
            }}> 
              <strong>Nicholas Hoang</strong> 
            </a>

            <a href="https://www.linkedin.com/in/sebastian-cursaro-483425268/" className="information"> 
              <strong>Sebastian Cursaro</strong> 
            </a>

          </div>
        </div>
      </div>

      {/* QCAR TEAM */}
      <div className='section' style= {{
          backgroundColor: '#485B51'
      }}>   
        <div className='section_title'>
          QCAR TEAM
        </div>

        <div className='team_description'>
          To design a fully autonomous vehicle system leveraging cutting edge AI/ML technologies for lane detection, <br />
          object detection, and much more.
        </div>

        <div className='subtitle'> 
          Graduate Students
          <div className="profile_container" style={{
            paddingLeft: isSmallScreen? '20vw' : '30vw',
            paddingRight: isSmallScreen? '20vw' : '30vw'
          }}>
            <div className='profile_image' style={{ 
              backgroundImage: `url(${profileImages.viswhakarama_abhishek})`, 
            }}> </div>

            <div className='profile_image' style={{ 
              backgroundImage: `url(${profileImages.trinh_phong})`, 
            }}> </div>

          </div>
          <div className="profile_container"style={{
            paddingTop: '10px',
            paddingLeft: isSmallScreen? '16.5vw' : '28vw',
            paddingRight: isSmallScreen? '24vw' : '31.5vw'
          }}>
            <a href="https://www.linkedin.com/in/karma218/" className="information"> <strong>Abhishek Vishwakarma</strong> </a>

            <a href="https://www.linkedin.com/in/phong-d-trinh/" className="information"> <strong>Phong Trinh</strong> </a>

          </div>
          
          <div className="profile_container"style={{
            paddingLeft: isSmallScreen? '21.5vw' : '30.25vw',
            paddingRight: isSmallScreen? '20vw' : '30vw'
          }}>
            <div className="information">Lane Detection</div>

            <div className="information">Object Detection</div>

          </div>
        </div>
        <div className="subtitle">
          Undergraduate Students
          <div className="profile_container" style={{
            paddingLeft: isSmallScreen? '10vw' : '20vw',
            paddingRight: isSmallScreen? '10vw' :  '20vw'
          }}>
            <div className='profile_image' style={{ 
              backgroundImage: `url(${profileImages.no_avatar})`, 
            }}> </div>
  
            <div className='profile_image' style={{ 
              backgroundImage: `url(${profileImages.hollingsworth_ket})`, 
            }}> </div>

            <div className='profile_image' style={{ 
              backgroundImage: `url(${profileImages.wang_nathan})`, 
            }}> </div>  
            
          </div>

          <div className="profile_container"style={{
            paddingTop: '10px',
            paddingLeft: isSmallScreen? '13vw' : '25.3vw',
            paddingRight: isSmallScreen? '14vw' : '25.8vw',
          }}>
            <div className="information"> 
              <u><strong>Edgar Santiago</strong> </u>
            </div>

            <a href="https://www.linkedin.com/in/ket-hollingsworth/" className="information" style={{
              margin: 'auto',
              paddingRight: isSmallScreen? '2vw' : '0.5vw'
            }}> 
              <strong>Ket Hollingsworth</strong> 
            </a>

            <a href="https://www.linkedin.com/in/nathan-wang-2a3698292/" className="information"> 
              <strong>Nathan Wang</strong> 
            </a>

          </div>

          <div className="profile_container"style={{
            paddingLeft: isSmallScreen? '35vw' : '39.25vw',
            paddingRight: isSmallScreen? '10.5vw' : '20.2vw',
            paddingBottom: '3vh'
          }}>
            <div className="information">CARLA Simulation</div>
            
            <div className="information">Lane Detection</div>

          </div>
        </div>
      </div>

      {/* ALUMNI */}
      {/* <div className='section' style= {{
          height: '100vh',
          backgroundColor: '#737259'
      }}>   
          <div className='section_title'>
            ALUMNI
          </div>
          <div className="profile_image" style={{ 
            backgroundImage: `url(${profileImages.brandon_chao})`,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}> 
          </div>
          <a href="https://www.linkedin.com/in/chaobrandon/" className="information" style={{
            margin: 'auto',
            paddingTop: '10px',
            paddingBottom: '3vh'
          }}>
            <strong>Brandon Chao</strong>
          </a>
      </div> */}
    </div>
  )
}
import './team.css';
import React from 'react';
import ResponsiveAppBar from './NavigationBar';
import { createRoot } from 'react-dom/client';

function Team() {
    return (
        <>
            <ResponsiveAppBar /> 
            <div className='section' style= {{
                height: '65vh',
                backgroundColor: '#324039'
            }}>
                <div className='section_title' style= {{
                    top: '5vh'
                }}>
                    FACULTY
                </div>
                <div className='profile_image' style={{ 
                    backgroundImage: `url(./assets/wang_yunsheng.jpg)`, 
                    top: '14vh',
                    left: '0',
                    right: '0',
                    marginLeft: 'auto',
                    marginRight: 'auto', 
                }}> </div>
                <div className='information' style={{
                    top: '50vh'
                }}>
                   Prof. Yunsheng Wang <br />
                   LinkedIn <br />
                </div>
            </div>

            <div className='section' style= {{
                height: '100vh',
                backgroundColor: '#485B51'
            }}>
                <div className='section_title'>
                    AGILE CAR TEAM
                </div>
                <div className='team_description'>
                    Agile car team description
                </div>
                <div className='subtitle' style={{
                    paddingTop: '4vh'
                }}> 
                    Graduate Students
                </div>
                <div className='subtitle' style={{
                    paddingTop: '40vh'
                }}> 
                    Undergraduate Students
                </div>
            </div>

            <div className='section' style= {{
                height: '100vh',
                backgroundColor: '#667A75'
            }}>   
                <div className='section_title'>
                    DONKEY CAR TEAM
                </div>
                <div className='team_description'>
                    To develop an accurate and efficient autonomous driving software that utilizes the latest breakthroughs in <br /> 
                    machine learning and edge computing
                </div>
                <div className='subtitle' style={{
                    paddingTop: '4vh'
                }}> 
                    Graduate Students
                </div>
                <div className='subtitle' style={{
                    paddingTop: '40vh'
                }}> 
                    Undergraduate Students
                </div>
            </div>

            <div className='section' style= {{
                height: '140vh',
                backgroundColor: '#758C85'
            }}>   
                <div className='section_title'>
                    QUANSER CAR (QCAR) TEAM
                </div>
                <div className='team_description'>
                    To design a fully autonomous vehicle system leveraging cutting edge AI/ML technologies for lane detection, <br />
                    object detection, and much more. 
                </div>
                <div className='subtitle' style={{
                    paddingTop: '4vh'
                }}> 
                    Graduate Students
                </div>
                <div className='profile_image' style={{ 
                        backgroundImage: `url(./assets/wang_nathan_1.jpg)`, 
                        marginTop: '11vh',
                        left: '35vw'
                    }}> </div>
                    <div className='profile_image' style={{ 
                        backgroundImage: `url(./assets/wang_nathan_1.jpg)`, 
                        marginTop: '11vh',
                        left: '55vw'
                    }}> </div>

                    <div className='information' style={{
                        marginTop: '41vh',
                        left: '-19vw'
                    }}>
                        <strong>Abhishek Vishwakarma</strong> <br />
                        Lane Detection
                    </div>
                    <div className='information' style={{
                        marginTop: '41vh',
                        left: '21vw'
                    }}>
                        <strong>Phong Trinh</strong> <br /> 
                        Object Detection
                    </div>

                <div className='subtitle' style={{
                    paddingTop: '60vh'
                }}> 
                    Undergraduate Students
                </div>
                <div className='profile_image' style={{ 
                        backgroundImage: `url(./assets/wang_nathan_1.jpg)`, 
                        marginTop: '67vh',
                        left: '24.5vw'
                    }}> </div>
                    <div className='profile_image' style={{ 
                        backgroundImage: `url(./assets/wang_nathan_1.jpg)`, 
                        marginTop: '67vh',
                        left: '0',
                        right: '0',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                    }}> </div>
                    <div className='profile_image' style={{ 
                        backgroundImage: `url(./assets/wang_nathan_1.jpg)`, 
                        marginTop: '67vh',
                        left: '64.5vw'
                    }}> </div>

                    <div className='information' style={{
                        marginTop: '97vh',
                        left: '-40vw'
                    }}>
                        <strong>Nathan Wang</strong> <br />
                        Lane Detection
                    </div>
                    <div className='information' style={{
                        marginTop: '97vh',
                    }}>
                        <strong>Ket Hollingsworth</strong> <br /> 
                        CARLA Simulation
                    </div>
                    <div className='information' style={{
                        marginTop: '97vh',
                        left: '40vw'
                    }}>
                        <strong>Edgar Santiago</strong> <br /> 
                    </div>
            </div> 

            <div className='section' style= {{
                height: '100vh',
                backgroundColor: '#737259'
            }}>   
                <div className='section_title'>
                    ALUMNI
                </div>
                <div className='team_description'>
                    Past team members
                </div>
                <div className='subtitle' style={{
                    paddingTop: '4vh'
                }}> 
                    Graduate Students
                </div>
                <div className='subtitle' style={{
                    paddingTop: '40vh'
                }}> 
                    Undergraduate Students
                </div>
            </div>
        </>
    );
}

export default Team;

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Team/>);
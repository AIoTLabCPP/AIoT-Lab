import { useState } from 'react'
import './App.css'
import ResponsiveAppBar from './NavigationBar'
import Slideshow from './Slideshow'; // Import the Slideshow component
import Container from '@mui/material/Container';
import team_photo from './assets/team_photo.jpg';

function App() {
  const [count, setCount] = useState(0)
  const images = [team_photo];

  return (
    <>
      <ResponsiveAppBar /> {/* Include the ResponsiveAppBar component here */}
      <div className="main-content">
        <div className='image'></div>
        <div className='main_title'>
          AIOT LAB
        </div>
        <div className='main_subtext'>
          Looking forward to a better future on the road. 
        </div>
        <div className='project_header'>
          WHO WE ARE
        </div>
        <div className='project_description'>
          [TEMPORARY TEXT] <br />
        </div>
        <div className='dot_menu'>
          &hellip;
        </div>
        <div className='slideshow'>
          <Slideshow images={images}/>
        </div>
      </div>
      <Container 
        maxWidth="lg"
        style={{
          
        }}
      >
      </Container>
    </>
  );
}

export default App

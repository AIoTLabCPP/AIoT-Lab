import { useEffect, useState } from 'react';
import './App.css';
import ResponsiveAppBar from './NavigationBar';
import Slideshow from './Slideshow'; // Import the Slideshow component
import Container from '@mui/material/Container';
import team_photo from './assets/team_photo.jpg';

function App() {
  const [count, setCount] = useState(0);
  const images = [team_photo];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
        else {
          entry.target.classList.remove('show');
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
    <>
      <ResponsiveAppBar /> {/* Include the ResponsiveAppBar component here */}
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

export default App;

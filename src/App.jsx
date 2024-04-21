import { useEffect, useState } from 'react';
import './App.css';
import ResponsiveAppBar from './NavigationBar';
import Slideshow from './Slideshow'; // Import the Slideshow component
import team_photo from './assets/team_photo.jpg';
 const rootLoader = async () => {
  return {};
};
export { rootLoader };

function App() {
  const [count, setCount] = useState(0);
  const images = [team_photo]; 

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
    <>
      <ResponsiveAppBar /> 
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
        </div>
      </div>
    </>
  );
}

export default App;

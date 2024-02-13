import { useState } from 'react'
import './App.css'
import ResponsiveAppBar from './NavigationBar'
// import BackgroundImage from './BackgroundImage'
import Container from '@mui/material/Container';
import backgroundImage from './assets/mountain_road62.jpg';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResponsiveAppBar /> {/* Include the ResponsiveAppBar component here */}
      <div className='image'>
      </div>
      <Container 
        maxWidth="lg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover', // Stretch the image to cover the entire container
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
          padding: 0, // Remove padding
          margin: 0, // Remove margin
          boxSizing: 'border-box', // Include padding and border in the element's total width and height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
      </Container>
    </>
  );
}

export default App

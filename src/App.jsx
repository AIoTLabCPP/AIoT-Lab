import { useState } from 'react'
import './App.css'
import ResponsiveAppBar from './NavigationBar'
import Container from '@mui/material/Container';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResponsiveAppBar /> {/* Include the ResponsiveAppBar component here */}
      <div className='image'></div>
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

import { useState } from 'react'
import './App.css'
import ResponsiveAppBar from './NavigationBar'
import Container from '@mui/material/Container';

function App() {
  const [count, setCount] = useState(0)

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

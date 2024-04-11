import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import aiotlogo from './assets/AIOT_logo.png';

const pages = ['Outcomes', 'Team', 'News'];
const pageLinks = [
  '/AIoT-Lab/src/outcomes.html',
  '/AIoT-Lab/src/team.html',
  '/AIoT-Lab/src/news.html'
]; 

function ResponsiveAppBar() {
  return (
    <AppBar position="fixed" style={{ top: 0, width: '100%', boxShadow: '0px 8px 4px rgba(0.5, 0.5, 0.5, 0.4)'}}> 
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div style={{ display: 'flex' }}> {/* Parent container */}
            <a href="/AIoT-Lab/src/index.html" style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <img alt="AIOT Logo" src={aiotlogo} style={{ width: 110, height: 40, marginLeft: '2vw' }} />
            </a>
            
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start' }}> {/* Adjust as needed */}
              {pages.map((page, index) => (
                <Button
                  key={page}
                  component="a" 
                  href={pageLinks[index]} 
                  style={{ color: 'white', textDecoration: 'none', marginLeft: 5, fontSize: '3vh' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

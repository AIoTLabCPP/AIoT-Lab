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
          <a href="/AIoT-Lab/src/index.html" style={{ textDecoration: 'none', cursor: 'pointer', display: 'inline-block', position: 'fixed', left: '5vw', top: '1.2vh' }}>
            <img alt="AIOT Logo" src={aiotlogo} style={{ width: 110, height: 40, marginRight: 8}} />
          </a>
          
          <Box sx={{ flexGrow: 1, display: 'flex', position: 'fixed', left: '11vw' }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                component="a" 
                href={pageLinks[index]} 
                style={{ color: 'white', display: 'block', textDecoration: 'none', position: 'relative', marginLeft: 5 }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

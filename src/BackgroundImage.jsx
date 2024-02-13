import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Import the background image
import backgroundImage from './assets/result_image (14).jpg';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container 
        maxWidth="lg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Set the height to cover the entire viewport
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white', // Text color
        }}
      >
        <div>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to My Website
          </Typography>
          <Typography variant="subtitle1">
            Explore and discover amazing content.
          </Typography>
        </div>
      </Container>
    </ThemeProvider>
  );
}

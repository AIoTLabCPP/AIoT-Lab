import React from 'react';
import ReactDOM from 'react-dom'; // Change from 'react-dom/client' to 'react-dom'

import App from './App'; // Assuming App.jsx is your main component
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
  )
);
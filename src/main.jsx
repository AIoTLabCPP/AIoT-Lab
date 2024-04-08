import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Team from './team.jsx'
import './index.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
// } from "react-router-dom"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "team",
//     element: <Team/>,
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <RouterProvider router={router}/>
)


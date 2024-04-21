import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HashRouter } from 'react-router-dom';
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Root, { rootLoader } from "./App.jsx";
import Team, { teamLoader } from "./team.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "team",
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //    <HashRouter>
  //         <App />
  //     </HashRouter>
  // </React.StrictMode>
)


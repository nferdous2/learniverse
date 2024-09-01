// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//   {/* <RouterProvider router={router}></RouterProvider> */}
//   <App />

//   </React.StrictMode>,

// )
import React from 'react'

import './index.css'
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home';
import Details from './Components/Details';
import Dashboard from './Components/Dashboard/Dashboard';
import Enrolled from './Components/Dashboard/Enrolled';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home />

      },
      {
        path: '/details/:_id',
        element: <Details />,
        loader: ({ params }) => fetch(`https://learniverse-server.vercel.app/course/${params._id}`)

      },
      {
        path: '/dashboard',
        element: <Dashboard />

      },
      {
        path: '/enrollcourse',
        element: <Enrolled />

      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projects from './components/Projects/Projects.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import ThreeDPrinting from './components/3DPrinting/ThreeDPrinting.jsx';
import About from './components/About/About.jsx'

const router = createBrowserRouter([
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "/threedprinting",
    element: <ThreeDPrinting />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

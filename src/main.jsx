import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home/Home.jsx'
import './index.css'
import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";
import Projects from './routes/Projects/Projects.jsx';
import ErrorPage from './routes/ErrorPage/ErrorPage.jsx';
import About from './routes/About/About.jsx';
import ThreeDPrinting from './routes/ThreeDPrinting/ThreeDPrinting.jsx'
import PlantAccesories from './routes/ThreeDPrinting/PlantAccessories/PlantAccessories.jsx';
import HomeDecor from './routes/ThreeDPrinting/HomeDecor/HomeDecor.jsx';

const router = createHashRouter([
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
    path: "/3dprinting",
    element: <ThreeDPrinting />,
    errorElement: <ErrorPage />
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path:"/3dprinting/Plant-Accessories",
    element: <PlantAccesories />,
    errorElement: <ErrorPage />
  },
  {
    path:"/3dprinting/Home-Decor",
    element: <HomeDecor />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

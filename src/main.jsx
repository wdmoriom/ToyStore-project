import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './component/Home';
import About from './component/About';
import Category from './component/Category';
import Error from './component/Error';
import ToyDetails from './Pages/ToyDetails';



const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    children : [
      {
        index: true,
        loader : () => fetch('toydata.json'),
        Component : Home
      },
      {
        path : 'about',
        Component: About
      },
     {
        path:'toyDetails/:id',
        Component : ToyDetails
     },
      {
        path : 'category',
        Component : Category
      },
      {
        path : '*',
        Component : Error
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

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
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthLayout from './Layout/AuthLayout';
import AuthProvider from './Provider/AuthProvider';
import Loading from './component/Loading';





const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    children : [
      {
        index: true,
        loader : () => fetch('toydata.json'),
        Component : Home,
        hydrateFallbackElement : <Loading></Loading>
      },
      {
        path : 'auth',
        Component : AuthLayout,
        children:[
          {
        path : '/auth/login',
        Component: Login
      },
      {
         path : '/auth/register',
         Component : Register
      },
        ]
      },
   
   
      {
        path : 'about',
        Component: About,
     
      },
      
     {
        path:'toyDetails/:id',
        loader : () => fetch('toydata.json'),
        Component : ToyDetails,
        hydrateFallbackElement : <Loading></Loading>
        
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
    <AuthProvider>
          <RouterProvider router={router} />
    </AuthProvider>
    
  </StrictMode>,
)

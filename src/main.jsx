import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router.jsx';
import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
<RouterProvider router={router} />
      </div>
      
    
    </HelmetProvider>
   </AuthProvider>
  </StrictMode>,
)

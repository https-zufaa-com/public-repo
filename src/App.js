import './App.css';
import React, { useEffect, useState } from 'react';
import ShareButtons from './Page/ShareButtons/ShareButtons';
import { Helmet } from 'react-helmet';
import { FaHome, FaTags } from 'react-icons/fa';
import { Link, RouterProvider } from 'react-router-dom';
import SingleNewsPage from './Page/SingleNewsPage/SingleNewsPage';
import { router } from './Page/Routes/Routes';

function App() {

  return (
    <div data-theme="light" className='bg-bg'>
      <RouterProvider router={router}>

      </RouterProvider>
    </div >
  );
}

export default App;

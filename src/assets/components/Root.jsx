import React from 'react';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;

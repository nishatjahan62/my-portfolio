import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const Layout = () => {
    return (
        <div>
           <Navbar></Navbar>
      <div className="lg:mx-10 mx-5 sm:mx-7 ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
        </div>
    );
};

export default Layout;
import React, { useEffect } from 'react'
// import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ServicesDetail from '../components/ServiceDetail';


function Otherpages() {
  
    useEffect(()=>{
      const location = window.location.pathname;
      const pathSepereted = location.split("/");
      const locString = pathSepereted[pathSepereted.length - 1];
      window.document.title = `Jo2Jos | ${locString? locString : ''}`;
    }, []);

  return (
    <>
        <Navbar />
        <ServicesDetail /> 
        <Footer />
    </>
  )
}

export default Otherpages
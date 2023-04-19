import React, { useEffect } from 'react'
// import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NoPage from '../components/NoPage';


function ErrorPage() {
  
  useEffect(()=>{
    const location = window.location.pathname;
    const pathSepereted = location.split("/");
    const locString = pathSepereted[pathSepereted.length - 1];
    window.document.title = `Jo2Jos | ${locString? locString : ''} | Error`
    }, []);

  return (
    <>
        <Navbar />
        <NoPage />
        <Footer />
    </>
  )
}

export default ErrorPage;
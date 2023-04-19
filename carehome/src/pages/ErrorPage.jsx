import React from 'react'
import { useLocation } from 'react-router-dom';
import { useTitle } from 'react-use';
// import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NoPage from '../components/NoPage';


function ErrorPage() {
  const location = useLocation();
  console.log('Location: ' + location);
  let pathSepereted = location.toString().split("/");
  const locString = pathSepereted[pathSepereted.length - 1];
  useTitle(`Jo2Jos | ${locString} | Error`);
  return (
    <>
        <Navbar />
        <NoPage />
        <Footer />
    </>
  )
}

export default ErrorPage;
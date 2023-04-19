import React from 'react'
import { useTitle } from 'react-use';
// import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NoPage from '../components/NoPage';


function ErrorPage() {
  const location = window.location.pathname;
  let pathSepereted = location.split("/");
  const locString = pathSepereted[pathSepereted.length - 1];
  useTitle(`Jo2Jos | ${locString? locString : ''} | Error`);
  return (
    <>
        <Navbar />
        <NoPage />
        <Footer />
    </>
  )
}

export default ErrorPage;
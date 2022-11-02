import React from 'react';
import Header from './home/Header';
import { useRouteMatch } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/ionicons.min.css';
import '../assets/css/line-awesome/css/line-awesome.min.css';
import '../assets/css/cryptocoins/css/cryptocoins.css';
import '../assets/css/cryptocoins/css/cryptocoins-colors.css';
import '../assets/css/font-awesome/css/font-awesome.min.css';
import '../assets/css/material-design-iconic-font/css/materialdesignicons.min.css';
export default function Layout({ children }) {

  const matchHomepage = useRouteMatch('/')
  const homePage = matchHomepage && matchHomepage.isExact

  // const matchLogin = useRouteMatch('/login')
  // const loginPage = matchLogin && matchLogin.isExact

  // const matchSignup = useRouteMatch('/signup')
  // const signupPage = matchSignup && matchSignup.isExact

  // if (matchLogin || signupPage) {
  //   return (
  //     <>
  //       {children}
  //     </>
  // )}

  return (
    <>
      {!homePage && <Header />}
      {children}
    </>
  );
}

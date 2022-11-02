import React,{useEffect} from 'react';
import '../../assets/scss/theme.scss';
//import AOS from 'aos';
import Header from '../home/Header';
import Footer from "../home/Footer";
import Bottom from "../home/Bottom";
import { Button } from "react-bootstrap";
import BackToTop from "../../components/landing/BackToTop";
import AOS from 'aos';
export default function Layout({ children }) {
  useEffect(() => {
    AOS.init();
    
    const btnTop = document.getElementById('btn-back-to-top');
    const navbar = document.getElementById('sticky');
    window.addEventListener('scroll', (e) => {
        e.preventDefault();
        if (btnTop) {
            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                btnTop.classList.add('show');
            } else {
                btnTop.classList.remove('show');
            }
        }
        if (navbar) {
            if (document.body.scrollTop >= 240 || document.documentElement.scrollTop >= 240) {
                navbar.classList.add('navbar-sticky');
            } else {
                navbar.classList.remove('navbar-sticky');
            }
        }
    });
  }, []);
  return (
    <div className='landing'>
      <Header/>
      {children}
      <div className="tradio">
        <div id="main-wrapper">
          <div className="parallax">
            <div className="refers section-padding">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-12">
                    <div className="section-title text-center">
                      <h2>
                        Get paid in Quantex Coin (QTX)<br />
                        every hour for trading and referrals.
                      </h2>
                      <Button variant="primary" style={{ padding: "8px 20px" }}>
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Bottom />
          <Footer />
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

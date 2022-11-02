import React, { Component } from "react";
import { Navbar, Nav, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeConsumer } from "../../context/ThemeContext";
import QuantexLogo from "../../assets/images/quantex-logo.svg";

export default class Header extends Component {
  componentDidMount() {
    let el = document.querySelector("#darkTheme");
    if (el) {
      el.addEventListener("click", function () {
        document.body.classList.toggle("dark");
      });
    }

    let mobileEl = document.querySelector("#darkMobileTheme");
    if (mobileEl) {
      mobileEl.addEventListener("click", function () {
        document.body.classList.toggle("dark");
      });
    }
  }

  render() {
    return (
      <>
        <header className="light-bb">
          <Navbar expand="lg">
            <Link className="navbar-brand" to="/">
              <img src={QuantexLogo} alt="Quantex Logo" />
            </Link>
            <Nav className="navbar-nav ml-auto">
              <Dropdown className="header-custom-icon home-header-icon mobile-version">
                <ThemeConsumer>
                  {({ data, update }) => (
                    <Button
                      variant="default"
                      onClick={update}
                      id="darkMobileTheme"
                    >
                      {data.theme === "light" ? (
                        <i className="icon ion-md-moon"></i>
                      ) : (
                        <i className="icon ion-md-sunny"></i>
                      )}
                    </Button>
                  )}
                </ThemeConsumer>
              </Dropdown>
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav mr-auto">
                <Link to="/markets" className="nav-link">
                  Markets
                </Link>
                <a href="https://trade.myquantex.com" className="nav-link">
                  Trade
                </a>
                <Link to="/swap/BTC/ETH/0.01" className="nav-link">
                  Swap
                </Link>
                <Link to="/help" className="nav-link">
                  Support
                </Link>
              </Nav>
              <Nav className="navbar-nav ml-auto">
                <Dropdown className="header-custom-icon home-header-icon desktop-version">
                  <ThemeConsumer>
                    {({ data, update }) => (
                      <Button variant="default" onClick={update} id="darkTheme">
                        {data.theme === "light" ? (
                          <i className="fa fa-moon-o"></i>
                        ) : (
                          <i className="fa fa-sun-o"></i>
                        )}
                      </Button>
                    )}
                  </ThemeConsumer>
                </Dropdown>
                <Link className="nav-link home-signinbtn mr-3" to="/login">
                  Sign In
                </Link>
                <Link className="nav-link home-signupbtn" to="/signup">
                  Sign Up
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </>
    );
  }
}

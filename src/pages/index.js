import Layout from "../components/Layout";
import { Switch, Route, useLocation } from "react-router-dom";
import Exchange from "../pages/exchange";
import Markets from "../pages/markets";
import Wallet from "./wallet";
import Login from "./login";
import Reset from "./reset";
import OtpVerify from "./otp-verify";
import OtpNumber from "./otp-number";
import Lock from "./lock";
import TermsAndConditions from "./terms-and-conditions";
import NewsDetails from "./news-details";
import Signup from "./signup";
import Notfound from "./notfound";
import Home from "./home";
// import Swap from "./swap";
import Swap from "../components/swap/Swap";
import Send from "../components/swap/Deposit";
import Receipt from '../components/swap/Receipt';
import Profile from "./profile";
import Settings from "./settings";
import Authentication from "./authentication";
import Referral from "./referral";
import Verification from "./verification";
import API from "./api";
import Privacy from "./privacy";
import FAQ from "./faq";
import LayoutLanding from "../components/landing/Layout";
import HelpDesk from "../components/landing/HelpDesk";
import HelpFAQ from "../components/landing/HelpFAQ";
import Contact from "../components/landing/Contact";
import Company from "../components/landing/Company";
import Software from "../components/landing/Software";
export default function Index() {
  const location = useLocation();
  const currentPath = location.pathname.slice(1);
  const paths = ["help", "faq", "contact", "about", "security"];
  return (
    <>
      {paths.includes(currentPath) ? (
        <LayoutLanding>
          <Switch>
            <Route path="/help">
              <HelpDesk />
            </Route>
            <Route path="/faq">
              <HelpFAQ />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <Company />
            </Route>
            <Route path="/security">
              <Software />
            </Route>
          </Switch>
        </LayoutLanding>
      ) : (
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <Exchange />
            </Route>
            <Route path="/markets">
              <Markets />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/swap/:coin_send/:coin_receive/:amount_send">
              <Swap />
            </Route>
            <Route path="/send/:order_id">
              <Send />
            </Route>
            <Route path="/receipt/:order_id">
              <Receipt />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/authentication">
              <Authentication />
            </Route>
            <Route path="/referral">
              <Referral />
            </Route>
            <Route path="/verification">
              <Verification />
            </Route>
            <Route path="/api">
              <API />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/reset">
              <Reset />
            </Route>
            <Route path="/otp-verify">
              <OtpVerify />
            </Route>
            <Route path="/otp-number">
              <OtpNumber />
            </Route>
            <Route path="/lock">
              <Lock />
            </Route>
            <Route path="/privacy-policy">
              <Privacy />
            </Route>
            <Route path="/terms-and-conditions">
              <TermsAndConditions />
            </Route>
            <Route path="/news-details">
              <NewsDetails />
            </Route>
            <Route path="/faq-old">
              <FAQ />
            </Route>
            <Route path="/notfound">
              <Notfound />
            </Route>
          </Switch>
        </Layout>
      )}
    </>
  );
}

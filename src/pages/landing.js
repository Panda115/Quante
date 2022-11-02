import React from 'react';
import BackToTop from '../components/landing/BackToTop';
import Hero from '../components/landing/Hero';
import Demos from '../components/landing/Demos';
import InnerPages from '../components/landing/InnerPages';
import AccountPages from '../components/landing/AccountPages';
import Features from '../components/landing/Features';
import CTA from '../components/landing/CTA';
import Footer from '../components/landing/Footer';
import { landings, secondaryPages, accountPages, features } from '../components/landing/data';
export default function landing() {
  return (
    <>
      
      {/* demos */}
      <Demos landings={landings} />

      {/* secondary pages */}
      <InnerPages pages={secondaryPages} />

      {/* auth pages */}
      <AccountPages pages={accountPages} />

      {/* features */}
      <Features features={features} />

      {/* cta */}
      <CTA />

      {/* footer */}
      <Footer />

      <BackToTop />
    </>
  );
}

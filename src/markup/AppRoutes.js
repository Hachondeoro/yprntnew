import React from 'react';

// react router dom
import { Route, Routes } from 'react-router-dom';

// pages
import Header from './layout/Header';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Membership from './pages/Membership';
import Sponsors from './pages/Sponsors';
import Footer from './layout/Footer';
import CustomScrollbar from './components/CustomScrollbar';
import Preloader from './components/Preloader';

const AppRoutes = () => {
  return (
    <>
      <Preloader />

      <CustomScrollbar />
      <div className="main-wrapper">
        {/* header - start */}
        <Header type="navigation-1" />
        {/* header - end */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/membership" element={<Membership />} />
          {/*<Route path="/joinus" element={<JoinUs />} />*/}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default AppRoutes;

import React from 'react';

// react router dom
import { Route, Routes } from 'react-router-dom';

// pages
import Header from './layout/Header';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import FeatureDetail2 from './pages/FeatureDetail2';
import Features1 from './pages/Features1';
import Features2 from './pages/Features2';
import GalleryPage from './pages/GalleryPage';
import Membership from './pages/Membership';
import Sponsors from './pages/Sponsors';
import Footer from './layout/Footer';
import CustomScrollbar from './components/CustomScrollbar';
import Preloader from './components/Preloader';
import JoinUs from "./pages/Joinus";

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
          <Route path="/feature-detail-2" element={<FeatureDetail2 />} />
          <Route path="/features-1" element={<Features1 />} />
          <Route path="/features-2" element={<Features2 />} />
          {/*<Route path="/pricing" element={<Pricing />} />*/}
          <Route path="/membership" element={<Membership />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default AppRoutes;

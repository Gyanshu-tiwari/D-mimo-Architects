import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Navbar } from '@/components/patterns/Navbar';
import { Footer } from '@/components/patterns/Footer';
import { FloatingContact } from '@/components/patterns/FloatingContact';
import { ScrollToTop } from '@/components/ScrollToTop';

import { Preloader } from '@/components/patterns/Preloader';

const Home = React.lazy(() => import('@/pages/Home'));
const Projects = React.lazy(() => import('@/pages/Projects'));
const ProjectDetail = React.lazy(() => import('@/pages/ProjectDetail'));
const About = React.lazy(() => import('@/pages/About'));
const Blog = React.lazy(() => import('@/pages/Blog'));
const Contact = React.lazy(() => import('@/pages/Contact'));
const PrivacyPolicy = React.lazy(() => import('@/pages/PrivacyPolicy'));
const TermsAndConditions = React.lazy(() => import('@/pages/TermsAndConditions'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));

function App() {
  return (
    <SmoothScroll>
      <Preloader />
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-(--background) overflow-x-clip">
          <Navbar />
          <main className="flex-1">
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-black text-white">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <FloatingContact />
        </div>
      </Router>
    </SmoothScroll>
  );
}

export default App;

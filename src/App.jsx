import { lazy, Suspense, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './utils/utils';
import MyStartUp from './pages/My StartUp';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectGrid from './pages/Projects';

const AboutUs = lazy(() => import('./pages/About Us'));


const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-primary">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-4 text-primary font-inter">Loading...</p>
    </div>
  </div>
);


export default function App() {

  const aboutRef = useRef(null);

  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Router>
      <ScrollToTop />
      <Header onAboutClick={handleScrollToAbout} />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/mystartup" element={<MyStartUp />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<ProjectGrid />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}
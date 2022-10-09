import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from "react-router-dom";

// includes pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CareersPage from './pages/CareersPage'
import ProjectsPage from './pages/ProjectsPage'
import ServicesPage from './pages/ServicesPage'
import Cadastral from './pages/Cadastral'
import Engineering from './pages/Engineering'
import Nopage from './pages/Nopage'
import GIS from './pages/GIS';
import LandDevelopment from './pages/LandDevelopment'
import UAV from './pages/UAV'
import LaserScanning from './pages/LaserScanning';
import UtilityMapping from './pages/UtilityMapping'; 
import ScrollToTop from './components/ScrollToTop';
import UtilityPage from './pages/UtilityPage';


function App() {
  
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="main-page-content">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/careers' element={<CareersPage />} />

          {/* services pages */}
          <Route path='/cadastral' element={<Cadastral />} />
          <Route path='/engineering' element={<Engineering />} />
          <Route path='/gis' element={<GIS />} />
          <Route path='/landdevelopment' element={<LandDevelopment />} />
          <Route path='/uav' element={<UAV />} />
          <Route path='/utilitymapping' element={<UtilityMapping />} />
          <Route path='/laserscanning' element={<LaserScanning />} />

          {/* utility page */}
          <Route path='/projects/:slug' element={<UtilityPage />} />

          {/* no page */}
          <Route path='*' element={<Nopage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

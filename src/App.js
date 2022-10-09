import './App.css';
import Footer from './components/Footer';
import { useParams } from 'react-router-dom'
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
  const { slug } = useParams()

  
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
          <Route path='/cadastral-surveying' element={<Cadastral />} />
          <Route path='/engineering-surveying' element={<Engineering />} />
          <Route path='/gis' element={<GIS />} />
          <Route path='/land-development' element={<LandDevelopment />} />
          <Route path='/uav-lidar' element={<UAV />} />
          <Route path='/utility-mapping' element={<UtilityMapping />} />
          <Route path='/laser-scanning' element={<LaserScanning />} />

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

import './App.css';
import AboutUs from './components/AboutUs';
import ClientSection from './components/ClientSection';
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Services from './components/Services';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// includes pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CareersPage from './pages/CareersPage'
import ProjectsPage from './pages/ProjectsPage'
import ServicesPage from './pages/ServicesPage'
import EngineeringCadastral from './pages/EngineeringCadastral'
import Nopage from './pages/Nopage'
import GIS from './pages/GIS';
import LandDevelopment from './pages/LandDevelopment'
import UAV from './pages/UAV'
import LaserScanning from './pages/LaserScanning';
import UtilityMapping from './pages/UtilityMapping';


function App() {

  return (
    <Router>
      <Navbar />
      <div className="main-page-content">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/careers' element={<CareersPage />} />

          {/* services pages */}
          <Route path='/engineeringcadastral' element={<EngineeringCadastral />} />
          <Route path='/gis' element={<GIS />} />
          <Route path='/landdevelopment' element={<LandDevelopment />} />
          <Route path='/uav' element={<UAV />} />
          <Route path='/utilitymapping' element={<UtilityMapping />} />
          <Route path='/laserscanning' element={<LaserScanning />} />

          {/* no page */}
          <Route path='*' element={<Nopage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
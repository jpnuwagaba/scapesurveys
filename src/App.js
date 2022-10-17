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
import Nopage from './pages/Nopage'
import ScrollToTop from './components/ScrollToTop';
import UtilityPage from './pages/UtilityPage';
import SingleServicePage from './pages/SingleServicePage';


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

          
          {/* single service page */}
          <Route path='/services/:slug' element={<SingleServicePage />} />

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

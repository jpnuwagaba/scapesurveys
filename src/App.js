import './App.css';
import Footer from './components/Footer';
import { useParams } from 'react-router-dom'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from "react-router-dom";
import { Helmet } from 'react-helmet'

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


  return (
    <>
      <Helmet>
        <meta charSet='utf-8'/>
        <meta name='description' content='Scapes and Surveys is a land survey firm based in Kampala Uganda' />
        <meta name='keywords' content='scapes and surveys associates, land surveying, land survey, geomatics'/>
      </Helmet>
      
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
    </>
  );
}

export default App;

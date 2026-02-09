import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Common Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Hero from './components/Hero';
import Services from './components/Services';
import WhyPartner from './components/WhyPartner';
import Industries from './components/Industries';
import ReadyToSimplify from './components/readytosimplify';
import Innovation from './components/Innovation';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Login from './Pages/Signup';
import ServiceDetail from './components/ServiceDetail';


// Separate Page for Sustainability
import Sustainability from './Pages/SustainableLogistics'; 
import SustainableLogistics from './Pages/SustainableLogistics';

// Create a Home component for the main landing page
const Home = () => (
  <>
    <Hero />
    <Services />
    <WhyPartner />
    <Industries />
    <ReadyToSimplify />
    <Innovation />
    <WhyChooseUs />
    <Testimonials />

  
    
    
  </>
);

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Main Landing Page Route */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          
         
          <Route path="/sustainability" element={<SustainableLogistics/>} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
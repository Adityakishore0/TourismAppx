import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Ensure casing matches your file system
import About from './components/About';
import Destinations from './components/Destinations';
import Experiences from './components/Experiences';
import Merchandise from './components/Merchandise';
import Collaborations from './components/Collaborations';
import Contact from './components/Contact';
import GuidedTours from './components/GuidedTours';
import CulturalWorkshops from './components/CulturalWorkshops';
import Events from './components/Events';
import OnlinePlatform from './components/OnlinePlatform';
import Address from './components/Address';
import Payment from './components/Payment';
import Pay from './components/Pay'; // Ensure casing matches your file system
import OrderConfirmation from './components/OrderConfirmation';
import MyOrders from './components/MyOrders';
import Jaipur from './places/Jaipur';
import Varanasi from './places/Varanasi';
import Goa from './places/Goa';
import Kerala from './places/Kerala';
import LehLadakh from './places/LehLadakh';
import Gangtok from './places/Gangtok';
import Shillong from './places/Shillong';
import KazirangaNationalPark from './places/KazirangaNationalPark';
import Account from './components/Account';
import AdminPage from './components/AdminPage'; // Import the AdminPage component
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import './App.css';

const App = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/jaipur" element={<Jaipur />} />
          <Route path="/destinations/varanasi" element={<Varanasi />} />
          <Route path="/destinations/goa" element={<Goa />} />
          <Route path="/destinations/kerala" element={<Kerala />} />
          <Route path="/destinations/leh-ladakh" element={<LehLadakh />} />
          <Route path="/destinations/gangtok" element={<Gangtok />} />
          <Route path="/destinations/shillong" element={<Shillong />} />
          <Route path="/destinations/kaziranga-national-park" element={<KazirangaNationalPark />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/guided-tours" element={<GuidedTours />} />
          <Route path="/cultural-workshops" element={<CulturalWorkshops />} />
          <Route path="/events" element={<Events />} />
          <Route path="/online-platform" element={<OnlinePlatform />} />
          <Route path="/address" element={<Address />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/account" element={<Account />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Add the Dashboard route */}
          {user && user.email === 'abhinavkishore075@gmail.com' && user.password === 'admin@123' && (
            <Route path="/admin" element={<AdminPage />} /> // Add route for AdminPage
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
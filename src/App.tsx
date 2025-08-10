import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Auth from './pages/Auth';
import DonateFood from './pages/DonateFood';
import DonateResources from './pages/DonateResources';
import Ragpickers from './pages/Ragpickers';
import Crowdfunding from './pages/Crowdfunding';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/donate-food" element={<DonateFood />} />
              <Route path="/donate-resources" element={<DonateResources />} />
              <Route path="/ragpickers" element={<Ragpickers />} />
              <Route path="/crowdfunding" element={<Crowdfunding />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
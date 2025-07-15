import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Availability from './pages/Availability';
import Booking from './pages/Bookings';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-100 font-sans">
        <Navbar />
        <main className="max-w-5xl mx-auto p-6 mt-6 bg-white shadow-xl rounded-2xl">
          <Routes>
            <Route path="/" element={<Availability />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-tight">🚘 Bolttech Carental</h1>
        <div className="space-x-6 text-md font-medium">
          <Link
            to="/"
            className={`transition duration-200 px-2 py-1 rounded-md ${
              location.pathname === '/'
                ? 'bg-white text-indigo-700 font-semibold shadow-sm'
                : 'text-white hover:bg-white/10'
            }`}
          >
            Availability
          </Link>
          <Link
            to="/booking"
            className={`transition duration-200 px-2 py-1 rounded-md ${
              location.pathname === '/booking'
                ? 'bg-white text-indigo-700 font-semibold shadow-sm'
                : 'text-white hover:bg-white/10'
            }`}
          >
            Booking
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default App;

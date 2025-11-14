// Main App component with routing
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookingForm from './pages/BookingForm';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation bar */}
        <Navbar />
        
        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            {/* Home page route */}
            <Route path="/" element={<Home />} />
            
            {/* Booking form page route */}
            <Route path="/book" element={<BookingForm />} />
            
            {/* Admin dashboard page route */}
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;




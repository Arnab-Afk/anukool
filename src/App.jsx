import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx'
import Commitee from './pages/Commitee.jsx'
import Interview from './pages/Interview.jsx'
import Calendar from './pages/Calendar.jsx'


const App = () => {
  return (
    <Router>
      <div className="p-4">
      <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/commitee" element={<Commitee />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

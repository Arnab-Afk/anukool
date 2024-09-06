import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx'
import Commitee from './pages/Commitee.jsx'
import Interview from './pages/Interview.jsx'
import Calendar from './pages/Calendar.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import UserContext from './context/userContext.js';
import LoginExpert from './pages/LoginExpert.jsx';


const App = () => {

  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <div className="bg-gray-100 min-h-screen p-4 gap-16">
        <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/commitee" element={<Commitee />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login-expert" element={<LoginExpert/>} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
};

export default App;

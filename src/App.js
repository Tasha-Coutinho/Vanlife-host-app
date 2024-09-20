import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer.jsx";
import { Home } from './components/pages/Home';
import Login from './components/auth/login/index.jsx';
import Register from './components/auth/register/index.jsx';
import { Dashboard, Income, Reviews, Vans  } from './components/pages';
import { Photos } from './components/pages/photos .jsx';
import { Pricing } from './components/pages/Pricing.jsx';
import { Details } from './components/pages/Details.jsx';
import Vandetails from './components/pages/Vandetails.jsx'; 
import EditVan from './components/pages/EditVan'; // <-- Import the new EditVan component
import { AuthProvider, useAuth } from './contexts/authContext';

function AppContent() {
  const { userLoggedIn } = useAuth();

  return (
    <div className="App">
      {userLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/income" element={<Income />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/vans" element={<Vans />} />

        {/* Nested Route for van details */}
        <Route path="/van" element={<Vandetails />}>
          <Route path="details" element={<Details />} />
          <Route path="photos" element={<Photos />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>

        {/* New Route for Edit Van page */}
        <Route path="/edit-van/:vanId" element={<EditVan />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;

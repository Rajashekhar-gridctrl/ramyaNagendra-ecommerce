import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductDetailWrapper from './components/ProductDetailWrapper';
import PrivateRoute from './components/auth/PrivateRoute';
import LoginPage from './pages/LoginPage/Login';
import HomePage from './pages/HomePage/Home';
import Header from './components/Header';
import './scss/_global.scss';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/product"
          element={ <ProductDetailWrapper />
          }
        />
         <Route
          path="/product"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ProductDetailWrapper />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import './Header.scss';

// Define the props interface
interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {
  return (
    <header className="header">
      <div className="logo">
      </div>
      <nav className="navigation">
        <a href="#home">HOME</a>
        <a href="#shop">SHOP</a>
        <a href="#pages">PAGES</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <div className="header-icons">
        <FaShoppingCart className="icon" title="Cart" />
        <FaUser className="icon" title="Login" />
        {isAuthenticated && (
          <button onClick={onLogout} className="logout-button">
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
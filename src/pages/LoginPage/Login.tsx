import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-8 border rounded-lg shadow-md">
        <h2 className="text-2xl mb-6">Login</h2>
        <button type="submit" className="bg-accent text-white px-4 py-2 rounded-lg">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;

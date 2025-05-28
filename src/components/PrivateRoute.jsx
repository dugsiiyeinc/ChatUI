// components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({ children }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  return user ? children : <Navigate to="/signin" />;
}

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Sign in error:", error.message);
      setError(error.message);
    } else {
      const userData = {
        id: data.user.id,
        email: data.user.email,
        username: data.user.user_metadata?.username,
        avatar: data.user.user_metadata?.avatar || '', // 👈 persist avatar
        role: data.user.user_metadata?.role || 'user',
      };

      // Give admin role manually if email matches
      if (userData.email === 'istarmohamed503@gmail.com') {
        userData.role = 'admin';
      }

      localStorage.setItem('loggedInUser', JSON.stringify(userData));
      alert(`✅ Successfully logged in! Welcome, ${userData.username}`);
      navigate('/chatpage');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      setIsLoading(false);
      return;
    }

    await handleLogin(email, password);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="max-w-md w-full bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign In</h2>

        {error && (
          <div className="mb-4 p-3 bg-gray-500 text-gray-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border bg-gray-200 text-black  rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border  bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-sm text-gray-600 hover:underline mt-1"
            >
              {/* {showPassword ? 'Hide password' : 'Show password'} */}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition disabled:bg-gray-400"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-600">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-gray-600 font-semibold hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;

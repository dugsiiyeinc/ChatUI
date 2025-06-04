import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Load user from Supabase session + store in localStorage
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (session?.user) {
        setUser(session.user);
        localStorage.setItem('loggedInUser', JSON.stringify({
          id: session.user.id,
          email: session.user.email,
          username: session.user.user_metadata?.username,
          role: session.user.user_metadata?.role || 'user',
        }));
      } else {
        localStorage.removeItem('loggedInUser');
      }

      setIsLoading(false);
    };

    getSession();

    // ✅ Listen for auth state changes (login/logout)
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        setUser(session.user);
        localStorage.setItem('loggedInUser', JSON.stringify({
          id: session.user.id,
          email: session.user.email,
          username: session.user.user_metadata?.username,
          role: session.user.user_metadata?.role || 'user',
        }));
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        localStorage.removeItem('loggedInUser');
      }
      setIsLoading(false);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // ✅ Sync across tabs
  useEffect(() => {
    const syncUser = () => {
      const storedUser = localStorage.getItem('loggedInUser');
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };
    window.addEventListener('storage', syncUser);
    return () => window.removeEventListener('storage', syncUser);
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('loggedInUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, isLoggedIn: !!user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

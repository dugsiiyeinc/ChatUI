// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('loggedInUser');
    return stored ? JSON.parse(stored) : null;
  });

  const [profile, setProfile] = useState(null); // optional: extend if needed
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Check Supabase session on initial load (optional if using localStorage)
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (session?.user) {
        // Don't override localStorage unless necessary
        setUser((prev) => prev || session.user);
      }
      setIsLoading(false);
    };

    getSession();

    // ✅ Listen for login/logout events from Supabase
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth event:", event);

      if (event === 'SIGNED_IN' && session?.user) {
        setUser(session.user);
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

  // ✅ Logout function
  const logout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  const value = {
    user,
    setUser,
    profile,
    isLoading,
    isLoggedIn: !!user,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook
// export const useAuth = () => {
//   const context = useContext(AuthContext);

//   if (context === null) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }

//   return context;
// };

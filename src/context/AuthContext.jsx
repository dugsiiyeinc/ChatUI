import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
// import { getUserProfile, onAuthChange, signOut } from "../lib/auth";
// import { getUserProfile } from '/src/lib/auth.js';

// import { onAuthChange } from '/src/lib/auth.js';

const AuthContext = createContext(null);


export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
          // e.g., update user context here
          console.log("Auth event:", event);
          console.log("Session:", session);
        });
      
        return () => {
          listener.subscription.unsubscribe();
        };
      }, []);
      



    const logout = async () => {
        try {
            await signOut()
        } catch (error) {
            console.error('Error signing out:', error)
        }
    }



    const value = {
        user,
        profile,
        isLoading,
        isLoggedIn: !!user,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}


export function useAuth() {

    const context = useContext(AuthContext);

    if (context === null) {
        throw new Error("useAuth must be used within and AuthProvider")
    }

    return context;
}
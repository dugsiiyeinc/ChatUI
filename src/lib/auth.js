import { supabase } from './supabase';

/**
 * Register a new user with email, password, and username
 * Adds default role and avatar to metadata
 */
export const signUp = async (email, password, username) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username,
        role: 'user', // default role
        avatar: `https://i.pravatar.cc/150?u=${email}`, // dynamic avatar based on email
      },
    },
  });

  if (error) throw error;
  return data;
};

/**
 * Sign in existing user
 * Returns session data
 */
export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  // if (error) throw error;
  // return data;
};

import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import {
  User,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../lib/firebase';

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  resetTimeout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Session timeout duration in milliseconds (30 minutes)
const SESSION_TIMEOUT = 30 * 60 * 1000;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
    resetTimeout();
  };

  const logout = useCallback(async () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    await signOut(auth);
  }, []);

  const resetTimeout = useCallback(() => {
    if (!currentUser) return;

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout
    timeoutRef.current = setTimeout(async () => {
      console.log('Session timeout - logging out user');
      await logout();
    }, SESSION_TIMEOUT);
  }, [currentUser, logout]);

  // Simplified activity tracking - only track essential events
  useEffect(() => {
    if (!currentUser) return;

    const resetTimeoutOnActivity = () => {
      resetTimeout();
    };

    // Reduced to only essential events for better performance
    const events = ['mousedown', 'keydown'];
    
    events.forEach(event => {
      document.addEventListener(event, resetTimeoutOnActivity, { passive: true });
    });

    // Initial timeout setup
    resetTimeout();

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, resetTimeoutOnActivity);
      });
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentUser, resetTimeout]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      
      if (!user && timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    loading,
    resetTimeout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
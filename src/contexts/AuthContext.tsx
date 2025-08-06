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
const ACTIVITY_THROTTLE = 60 * 1000; // 1 minute throttle

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
  const lastActivityRef = useRef<number>(Date.now());
  const throttleRef = useRef<NodeJS.Timeout | null>(null);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
    resetTimeout();
  };

  const logout = useCallback(async () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (throttleRef.current) {
      clearTimeout(throttleRef.current);
      throttleRef.current = null;
    }
    await signOut(auth);
  }, []);

  const resetTimeout = useCallback(() => {
    if (!currentUser) return;

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Update last activity time
    lastActivityRef.current = Date.now();

    // Set new timeout
    timeoutRef.current = setTimeout(async () => {
      console.log('Session timeout - logging out user');
      await logout();
    }, SESSION_TIMEOUT);
  }, [currentUser, logout]);

  // Optimized activity tracking with throttling
  useEffect(() => {
    if (!currentUser) return;

    const resetTimeoutOnActivity = () => {
      const now = Date.now();
      
      // Only reset if it's been more than the throttle time since last activity
      if (now - lastActivityRef.current > ACTIVITY_THROTTLE) {
        if (throttleRef.current) {
          clearTimeout(throttleRef.current);
        }
        
        throttleRef.current = setTimeout(() => {
          resetTimeout();
        }, 1000); // Small delay to batch multiple events
      }
    };

    // Reduced event listeners for better performance
    const events = ['mousedown', 'keypress', 'scroll', 'touchstart'];
    
    // Add event listeners with passive option for better performance
    events.forEach(event => {
      document.addEventListener(event, resetTimeoutOnActivity, { passive: true });
    });

    // Initial timeout setup
    resetTimeout();

    // Cleanup
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, resetTimeoutOnActivity);
      });
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (throttleRef.current) {
        clearTimeout(throttleRef.current);
      }
    };
  }, [currentUser, resetTimeout]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      
      if (!user) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        if (throttleRef.current) {
          clearTimeout(throttleRef.current);
          throttleRef.current = null;
        }
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
      {!loading && children}
    </AuthContext.Provider>
  );
};
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showTimeoutWarning, setShowTimeoutWarning] = useState(false);
  const { login, currentUser, resetTimeout } = useAuth();

  // Show timeout warning 5 minutes before session expires
  useEffect(() => {
    if (!currentUser) return;

    const warningTimeout = setTimeout(() => {
      setShowTimeoutWarning(true);
    }, 25 * 60 * 1000); // 25 minutes (5 minutes before 30-minute timeout)

    return () => clearTimeout(warningTimeout);
  }, [currentUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await login(email, password);
    } catch (error: any) {
      setError(error.message);
    }
    
    setLoading(false);
  };

  const handleExtendSession = () => {
    resetTimeout();
    setShowTimeoutWarning(false);
  };

  return (
    <div className="min-h-screen bg-[#fff8ea] flex items-center justify-center p-4">
      {/* Session timeout warning modal */}
      {showTimeoutWarning && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-center text-[#212c2d]">
                Session Timeout Warning
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-700">
                Your session will expire in 5 minutes due to inactivity.
              </p>
              <div className="flex gap-2 justify-center">
                <Button
                  onClick={handleExtendSession}
                  className="bg-[#212c2d] hover:bg-[#2a3738] text-white"
                >
                  Extend Session
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowTimeoutWarning(false)}
                  className="border-[#212c2d] text-[#212c2d]"
                >
                  Dismiss
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-[#212c2d]">
            Admin Login
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#212c2d] focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#212c2d] focus:border-transparent"
                required
              />
            </div>
            
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#212c2d] hover:bg-[#2a3738] text-white"
            >
              {loading ? 'Loading...' : 'Login'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
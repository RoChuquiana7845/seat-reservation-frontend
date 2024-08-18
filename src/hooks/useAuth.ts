import { useState, useEffect } from 'react';
import { checkAuthStatus } from '@/lib/auth';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const token = localStorage.getItem('authToken'); // O obtenerlo de una cookie
        if (token) {
          const authStatus = await checkAuthStatus();
          setIsAuthenticated(authStatus);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, []);

  return { isAuthenticated, loading, setIsAuthenticated };
};

"use client";
import { useState, useEffect } from 'react';
import { checkAuthStatus } from '@/lib/auth';
import Cookies from 'js-cookie'

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const token = Cookies.get('token')
        console.log(token)
        if (token) {
          const authStatus = await checkAuthStatus(token);
          setIsAuthenticated(true);
          console.log(authStatus)
          return authStatus
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

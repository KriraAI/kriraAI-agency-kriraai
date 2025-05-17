import { useEffect, useState } from 'react';

export const useLoading = () => {
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState('center');

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
      setPosition('center');
    };

    const handleComplete = () => {
      setTimeout(() => {
        setPosition('navbar');
        setTimeout(() => {
          setLoading(false);
        }, 700); // Transition time for animation to move
      }, 800); // Minimum 1 second delay
    };

    window.addEventListener('routeChangeStart', handleStart);
    window.addEventListener('routeChangeComplete', handleComplete);

    // Ensure we complete initial loading
    handleComplete();

    return () => {
      window.removeEventListener('routeChangeStart', handleStart);
      window.removeEventListener('routeChangeComplete', handleComplete);
    };
  }, []);

  return { loading, position };
};

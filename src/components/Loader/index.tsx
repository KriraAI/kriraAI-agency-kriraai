'use client';

import React, { useEffect, useState } from 'react';
import { useLoading } from '@/hooks/useLoading';
import Loading from '@/components/Loading';

const LoadingHandler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { loading, position } = useLoading();
  const [clientLoading, setClientLoading] = useState(false);

  useEffect(() => {
    setClientLoading(true); 
  }, []);

  return clientLoading && loading ? <Loading position={position} /> : <>{children}</>;
};

export default LoadingHandler;

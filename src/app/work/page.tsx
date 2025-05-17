import React from 'react';
import dynamic from 'next/dynamic';

const WorkPageClient = dynamic(() => import('./WorkPageClient'), { ssr: false });

const WorkPage = () => {
  return <WorkPageClient />;
};

export default WorkPage;

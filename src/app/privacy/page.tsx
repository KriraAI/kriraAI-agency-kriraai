import React from 'react';
import privacyPolicyData from '@/data/privacy.json';

const PrivacyPolicy = () => {
  const { title, content } = privacyPolicyData;
  return (
    <div className="container xxs:!container xxs:text-justify xxs:mx-0 xxs:w-full mx-auto mt-24 px-6 lg:px-32 py-8">
      <h1 className="text-5xl justify-center flex font-bold mb-12">{title}</h1>
      {content.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{section.sectionTitle}</h2>
          <p className="text-base text-text-secondary">{section.sectionContent}</p>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;

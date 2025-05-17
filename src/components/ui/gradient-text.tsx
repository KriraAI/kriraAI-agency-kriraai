import React from 'react';

const TextGradientHeading: React.FC<{ text: string,size:string }> = ({ text,size="text-4xl" }) => {
  return (
    <h2 className={`text-gradient-heading mt-2 ${size} font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end`}>
      {text}
    </h2>
  );
};

export default TextGradientHeading;
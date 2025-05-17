import React from 'react';

const TextGradientHead1: React.FC<{ text: string,size:string }> = ({ text,size="text-4xl" }) => {
  return (
    <h1 className={`text-gradient-heading mt-2 ${size} font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end`}>
      {text}
    </h1>
  );
};

export default TextGradientHead1;
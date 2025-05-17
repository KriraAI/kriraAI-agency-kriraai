import { useEffect, useState } from 'react';
import { animate } from 'framer-motion';

const CountAnimation = (target: number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, target, {
      duration: 4,
      onUpdate(value) {
        setCount(Math.floor(value));
      }
    });

    return () => controls.stop();
  }, [target]);

  return count;
};

export default CountAnimation;

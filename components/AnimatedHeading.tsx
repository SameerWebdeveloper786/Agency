
import React, { useState, useEffect } from 'react';

interface AnimatedHeadingProps {
  prefix: string;
  words: string[];
  className?: string;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ prefix, words, className = '' }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setReverse(true);
      }, 1500);
      return () => clearTimeout(pauseTimeout);
    }
    
    if (subIndex === words[index].length && !reverse) {
      setIsPaused(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, isPaused]);

  return (
    <h1 className={className}>
      {prefix}{' '}
      <span className="gradient-text font-bold">
        {`${words[index].substring(0, subIndex)}`}
      </span>
      <span className="animate-ping">_</span>
    </h1>
  );
};

export default AnimatedHeading;

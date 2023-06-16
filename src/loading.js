import React, { useState, useEffect } from 'react';
import '../src/loading.css';
import beachBall from './beach-ball.gif'; // Update the import path accordingly

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate the loading screen
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="loading-container">
      <img className="loading-gif" src={beachBall} alt="Loading..." />
    </div>
  );
};

export default Loading;

import React, { useState, useEffect } from 'react';
import './loading.css'; // Update the import path for your CSS file
import beachBall from './rowing.mp4'; // Update the import path for your video file

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
      <video className="loading-video" autoPlay loop muted>
        <source src={beachBall} type="video/mp4" />
      </video>
    </div>
  );
};

export default Loading;

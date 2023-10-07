import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
  
    const updateTime = () => {
      setCurrentTime(new Date());
    };

 
    const interval = setInterval(updateTime, 1000);

  
    return () => {
      clearInterval(interval);
    };
  }, []); 

  const Time = currentTime.toLocaleTimeString();

  return (
    <div>
      <h2>Time: {Time}</h2>
    </div>
  );
}

export default Clock;
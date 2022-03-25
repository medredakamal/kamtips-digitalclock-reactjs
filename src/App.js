import React, { useState, useEffect } from 'react';
import './style.css';

const App = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeconvention, setTimeConvention] = useState('-');

  const updateTime = () => {
    let myDate = new Date();
    let myHours = myDate.getHours();
    let myMinutes = myDate.getMinutes();
    let mySeconds = myDate.getSeconds();

    setTimeConvention('AM');

    if (myHours == 0) {
      setHours(12);
    }

    if (myHours > 12) {
      setHours(hours - 12);
      setTimeConvention('PM');
    }

    myHours < 10 ? setHours('0' + myHours) : setHours(myHours);
    myMinutes < 10 ? setMinutes('0' + myMinutes) : setMinutes(myMinutes);
    mySeconds < 10 ? setSeconds('0' + mySeconds) : setSeconds(mySeconds);
  };

  const clockStyle = {
    overflow: 'hidden',
    maxWidth: '375px',
    padding: '5px 14px',
    margin: 'auto',
    color: '#fff',
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.33)',
    fontSize: '55px',
    textAlign: 'center',
    backgroundColor: '#007bff',
    borderRadius: '5px',
  };

  useEffect(() => setTimeout(() => updateTime(), 1000)), [seconds];

  return (
    <div style={clockStyle}>
      {hours && minutes && seconds
        ? `${hours}:${minutes}:${seconds} ${timeconvention}`
        : 'Loading...'}
    </div>
  );
};

export default App;

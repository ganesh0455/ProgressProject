//import logo from './logo.svg';
//import dream from './Dream.jpg'
import React from 'react';
import './styles.css';
import './App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    console.log("year=", year);
    const difference = +new Date(`01/01/2023`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  //const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="App-header">
      <p className="font-effect-fire-animation">Countdown for January 2023</p>
      <div className="CountDown">
        <div className="TimeEmoji">&#8987;</div>
        <div className='TimeSize'>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>
      </div>
      <div>
        <p className="quote">Hope you are doing hard work</p>
      </div>
      <div className='YourProgress' onClick={() => { navigate('/progress') }}>Your Progress</div>
    </div>
  );
}

export default App;

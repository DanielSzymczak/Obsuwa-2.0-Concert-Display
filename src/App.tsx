import { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/Menu';

function App() {
  const [currentDateTime, setCurrentDateTime] = useState<string>(getCurrentDateTime());

  // Function to get the current date and time as a string
  function getCurrentDateTime(): string {
    const now = new Date();
    const day = now.toLocaleDateString('pl-PL', { weekday: 'long' }); // Full weekday name
    const time = now.toLocaleTimeString('pl-PL', { hour12: false }); // 24-hour time format
    return `${day}, ${time}`;
  }

  // Update the current date and time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(getCurrentDateTime());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="navbar">
        <h2>Aktualny czas: {currentDateTime}</h2>
      </div>

      {/* Main content */}
      <div className="content-container">
        <div className="container">
          {/* Your Menu or other components */}
          <Menu />
        </div>
      </div>
    </>
  );
}

export default App;

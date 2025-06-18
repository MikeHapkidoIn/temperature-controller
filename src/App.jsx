
import React, { useState } from 'react';
import TemperatureDisplay from './components/TemperatureDisplay';
import TemperatureControls from './components/TemperatureControls';
import HistoryList from './components/HistoryList';

const App = () => {
  const [temperature, setTemperature] = useState(20);
  const [history, setHistory] = useState([]);

  const addToHistory = (newTemp) => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const newEntry = {
      temperature: newTemp,
      time: timeString
    };
    setHistory(prevHistory => [newEntry, ...prevHistory]);
  };

  const handleIncrease = () => {
    const newTemp = temperature + 1;
    setTemperature(newTemp);
    addToHistory(newTemp);
  };

  const handleDecrease = () => {
    const newTemp = temperature - 1;
    setTemperature(newTemp);
    addToHistory(newTemp);
  };

  const handleReset = () => {
    setTemperature(20);
    setHistory([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-orange-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          🌡️ Controlador de Temperatura
        </h1>
        
        <div className="space-y-8">
          <TemperatureDisplay temperature={temperature} />
          
          <TemperatureControls
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onReset={handleReset}
          />
          
          <HistoryList history={history} />
        </div>
      </div>
    </div>
  );
};

export default App;
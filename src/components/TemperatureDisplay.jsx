import React from 'react';

const TemperatureDisplay = ({ temperature }) => {
  const getMessage = (temp) => {
    if (temp < 15) return "¡Hace frío!";
    if (temp >= 15 && temp <= 25) return "Temperatura agradable";
    return "¡Hace calor!";
  };

  const getColor = (temp) => {
    if (temp < 15) return "text-blue-600";
    if (temp >= 15 && temp <= 25) return "text-green-600";
    return "text-red-600";
  };

  const getBgColor = (temp) => {
    if (temp < 15) return "bg-blue-50 border-blue-200";
    if (temp >= 15 && temp <= 25) return "bg-green-50 border-green-200";
    return "bg-red-50 border-red-200";
  };

  return (
    <div className={`p-8 rounded-lg border-2 ${getBgColor(temperature)} text-center`}>
      <div className={`text-6xl font-bold mb-4 ${getColor(temperature)}`}>
        {temperature}°C
      </div>
      <div className={`text-xl font-medium ${getColor(temperature)}`}>
        {getMessage(temperature)}
      </div>
    </div>
  );
};

export default TemperatureDisplay;
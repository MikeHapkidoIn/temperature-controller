import React from 'react';

const TemperatureControls = ({ onIncrease, onDecrease, onReset }) => {
  return (
    <div className="flex gap-4 justify-center">
      <button
        onClick={onDecrease}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium text-lg"
      >
        - Bajar
      </button>
      <button
        onClick={onReset}
        className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium text-lg"
      >
        Reset
      </button>
      <button
        onClick={onIncrease}
        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium text-lg"
      >
        + Subir
      </button>
    </div>
  );
};

export default TemperatureControls;
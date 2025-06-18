import React from 'react';

const HistoryList = ({ history }) => {
  if (history.length === 0) {
    return (
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Historial de Cambios</h3>
        <p className="text-gray-500 italic">No hay cambios registrados</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">Historial de Cambios</h3>
      <div className="max-h-60 overflow-y-auto">
        <ul className="space-y-2">
          {history.map((entry, index) => (
            <li key={index} className="bg-white p-3 rounded border text-sm font-mono">
              <span className="text-gray-600">[{entry.time}]</span>
              <span className="ml-2">→</span>
              <span className="ml-2 font-semibold text-gray-800">{entry.temperature}°C</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HistoryList;
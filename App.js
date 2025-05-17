
import React, { useState } from 'react';

const App = () => {
  const [country, setCountry] = useState('IN');
  const [holidays, setHolidays] = useState([]);
  const [apiKey, setApiKey] = useState('');

  const fetchHolidays = async () => {
    const response = await fetch(`https://holidays.abstractapi.com/v1/?api_key=${apiKey}&country=${country}&year=2025`);
    const data = await response.json();
    setHolidays(data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Public Holidays</h1>
      <input
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="Enter API Key"
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Country Code (e.g., IN)"
        style={{ marginRight: '10px' }}
      />
      <button onClick={fetchHolidays}>Fetch Holidays</button>

      <ul>
        {holidays.map((holiday, index) => (
          <li key={index}>
            <strong>{holiday.name}</strong> - {holiday.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

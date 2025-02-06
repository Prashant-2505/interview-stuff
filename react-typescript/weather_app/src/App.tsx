import './App.css';
import { useEffect, useState } from 'react';

const App: React.FC = () => {
  interface Headers {
    'x-rapidapi-key': string;
    'x-rapidapi-host': string;
  }

  interface WeatherApi {
    method: string;
    headers: Headers;
  }

  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const options: WeatherApi = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'cb20a1d945mshccba951fe1644cbp12afa8jsn1ab8c832b756',
      'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
    },
  };

  const getWeather = async () => {
    if (!city.trim()) return; // Prevent API call if city is empty

    try {
      setLoading(true);
      const response = await fetch(
        `https://open-weather13.p.rapidapi.com/city/${city}/in`,
        { ...options }
      );
      if (!response.ok) throw new Error('Failed to fetch weather');
      
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) getWeather();
  }, [city]);

  useEffect(() => {
    console.log(weather); // Logs weather data when updated
  }, [weather]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {weather && (
        <div>
          <h2>Weather Data:</h2>
          <pre>{JSON.stringify(weather, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;

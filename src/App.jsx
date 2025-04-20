import { useState } from "react";
import Weather from "./Weather";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "59871b6454f8280eae99988bea614fa3";

  const fetchWeather = async () => {
    if (city.trim() === "") return;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 to-blue-500 p-6">
      <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-md">Weather App</h1>

      <div className="flex gap-3 mb-8">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 w-64 shadow-sm"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
        >
          Search
        </button>
      </div>

      {weather && <Weather data={weather} />}
    </div>
  );
}

export default App;

import { useState } from "react";
import Weather from "./Weather";
import "animate.css";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600 p-8 transition-all duration-500 ease-in-out">
      <h1 className="text-5xl font-semibold text-white mb-8 drop-shadow-lg animate__animated animate__fadeIn animate__delay-1s">
        Weather App
      </h1>

      <div className="flex gap-4 mb-6 max-w-lg w-full">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="px-5 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 shadow-lg transition-transform duration-300 ease-in-out transform focus:scale-105"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300 shadow-lg transform hover:scale-105"
        >
          Search
        </button>
      </div>

      {weather && (
  <Weather key={weather.name} data={weather} />
)}

    </div>
  );
}

export default App;

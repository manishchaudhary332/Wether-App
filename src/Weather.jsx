import React from "react";
import "animate.css";

function Weather({ data }) {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white p-8 rounded-2xl shadow-lg text-center w-80 space-y-4 animate__animated animate__zoomIn">
      <h2 className="text-3xl font-semibold text-blue-800">
        {data.name}, {data.sys.country}
      </h2>
      <p className="text-5xl font-extrabold text-gray-900">
        {Math.round(data.main.temp)}°C
      </p>
      <p className="text-gray-600 text-lg capitalize">
        {data.weather[0].description}
      </p>
      <div className="flex justify-center gap-4 text-sm text-gray-500 mt-4">
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind: {data.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default Weather;

import React from "react";

function Weather({ data }) {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white p-8 rounded-2xl shadow-lg text-center w-80 space-y-4">
      <h2 className="text-3xl font-bold text-blue-800">{data.name}</h2>
      <p className="text-5xl font-extrabold text-gray-900">{Math.round(data.main.temp)}°C</p>
      <p className="text-gray-600 text-lg capitalize">{data.weather[0].description}</p>
    </div>
  );
}

export default Weather;

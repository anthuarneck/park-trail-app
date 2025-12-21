import React from "react";
import { useState, useEffect } from "react";

function Weather() {
  const weatherUrl = import.meta.env.VITE_WEATHER_API_URL;

  const [temperature, setTemperature] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  useEffect(() => {
    fetch(`${weatherUrl}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setTemperature(responseJSON.current.temp_f);
        setWeatherIcon(responseJSON.current.condition.icon);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(temperature, weatherIcon);

  return (
    <div style={{ position: "fixed", zIndex: 2, top: "30px", left: "50px" }}>
      {weatherIcon && <img src={weatherIcon} alt="weather icon" />}
      {temperature && `${temperature}°F`}
    </div>
  );
}

export default Weather;

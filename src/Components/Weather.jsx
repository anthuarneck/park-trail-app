import React from "react";

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
        console.log(temperature, weatherIcon);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div>Weather</div>;
}

export default Weather;

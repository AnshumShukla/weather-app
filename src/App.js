import { useState } from "react";
import { CURRENT_WEATHER_API, CURRENT_WEATHER_API_KEY } from "./api";
import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Footer from "./components/Footer/Footer";
import Forecast from "./components/forecast/forecast";
import Search from "./components/search/search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${CURRENT_WEATHER_API}/weather?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${CURRENT_WEATHER_API}/forecast?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      <Footer />
    </div>
  );
}

export default App;

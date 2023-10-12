import { useState } from "react";
import "./App.scss";
import CityForm from "./components/CityForm";
import CityList from "./components/CityList";
import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityHistory, setCityHistory] = useState([]);

  const fetchWeatherData = (formData) => {
    const { city } = formData;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09fd719b4b698ec0260e424f83378e3d`;

    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setWeatherData(data))
      .then(() => !cityHistory.includes(city) && setCityHistory([...cityHistory, city]))
      .catch((err) => {
        console.log(err);
        setWeatherData(null);
      });
  };

  return (
    <>
      <Header />
      <main>
        <CurrentWeather weatherData={weatherData} />
        <CityForm onSubmit={fetchWeatherData} />
        <CityList cities={cityHistory} fetchWeatherData={fetchWeatherData} />
      </main>
    </>
  );
}

export default App;

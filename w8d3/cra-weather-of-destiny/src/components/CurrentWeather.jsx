// Temperature: *.main.temp
// Humidity:    *.main.humidity
// Description: *.weather[0].description
// Name:        *.name

export default function CurrentWeather(props) {
  const { weatherData } = props;
  return (
    <section className="CurrentWeather">
      {!weatherData && <h1>SEARCH FOR A CITY ! :D</h1>}

      {weatherData && (
        <>
          <h1>Current Weather for {weatherData.name}</h1>
          <p>
            {Math.round(weatherData.main.temp - 273.15)}°C / {weatherData.main.humidity}%
          </p>
          <p>{weatherData.weather[0].description}</p>
        </>
      )}
    </section>
  );
}

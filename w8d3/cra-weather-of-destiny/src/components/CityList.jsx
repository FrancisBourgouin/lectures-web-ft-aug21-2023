import CityListItem from "./CityListItem";

export default function CityList(props) {
  const { cities, fetchWeatherData } = props;

  const parsedCities =
    Array.isArray(cities) &&
    cities.map((city) => (
      <li key={city}>
        <button onClick={() => fetchWeatherData({ city })}>{city}</button>
      </li>
    ));

  return <ul className="CityList">{parsedCities}</ul>;
}

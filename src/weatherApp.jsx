import SearchBox from './searchBox';
import InfoBox from './infoBox';
import { useState } from 'react';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: 'undefined',
    temp: 0,
    tempMin: 0,
    tempMax: 0,
    humidity: 0,
    feelsLike: 0,
    weather: 'undefined',
  });

  let updateWeatherInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div>
      <h3
        style={{
          fontSize: '1.5rem',
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
        WEATHER APP - by Akram
      </h3>
      <SearchBox updateInfo={updateWeatherInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './searchBox.css';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState('');

  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let res = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      let jsonRes = await res.json();
      let result = {
        city: city,
        temp: jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feelsLike: jsonRes.main.feels_like,
        weather: jsonRes.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity('');
      let result = await getWeatherInfo();
      updateInfo(result);
    } catch (err) {
      updateInfo({
        city: 'Not Found',
        temp: 0,
        tempMin: 0,
        tempMax: 0,
        humidity: 0,
        feelsLike: 0,
        weather: 'undefined',
      });
    }
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          sx={{ width: '320px', mb: 2 }}
        />
        <br />
        <Button
          variant="contained"
          type="submit"
          size="medium"
          id="searchButton"
          sx={{
            fontWeight: 'bold',
            textTransform: 'none',
            borderRadius: '8px',
          }}
        >
          Search
        </Button>
      </form>
    </div>
  );
}

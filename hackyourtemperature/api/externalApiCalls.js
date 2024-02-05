import axios from 'axios';
import API_KEY from '../sources/keys.js';

export const openWeatherData = async (cityName) => {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY.openweathermap}&units=metric`
  );
};

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherConditions = () => {
  const [weatherConditions, setWeatherConditions] = useState([]);

  useEffect(() => {
    // Замените 'YOUR_API_KEY' на ваш ключ для доступа к API погоды
    const api_key = 'YOUR_API_KEY';
    const url = `http://api.weatherapi.com/v1/current.json?key=31df9645a3324df8b7481306230208`;

    axios.get(url)
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          // Предположим, API возвращает погодные данные в поле 'weather' в каждом объекте прогноза
          const conditions = data.forecast.map(item => item.weather);
          // Используем Set для получения уникальных значений
          const uniqueConditions = Array.from(new Set(conditions));
          setWeatherConditions(uniqueConditions);
        } else {
          console.log('Не удалось получить данные о погоде.');
        }
      })
      .catch(error => {
        console.log('Произошла ошибка при запросе:', error);
      });
  }, []);

  return (
    <div>
      <h2>Возможные погодные условия:</h2>
      <ul>
        {weatherConditions.map((condition, index) => (
          <li key={index}>{condition}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherConditions;

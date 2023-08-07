import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react'
import './WeatherChart.scss'

import useWeatherServices from '../../services/WeatherServices'
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const WeatherChart = ({ selectedCity }) => {
  const [weather, setWeather] = useState(null);
  const { loading, error, getWeatherForecast, clearError } = useWeatherServices()

  useEffect(() => {
    if (selectedCity) {
      updateWeather(selectedCity)
    }
  }, [selectedCity])

  const updateWeather = ({ lat, lon }) => {
    if (lat && lon) {
      clearError()
      getWeatherForecast(lat, lon)
        .then(onLoaded)
    }
  }

  const onLoaded = (weather) => {
    setWeather((prevWeather) => ({
      ...prevWeather,
      ...weather,
    }));
  };
  const spinner = loading ? <Loader /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const content = !(error || loading || !weather) ? <View dataChart={weather} /> : null

  return (
    <>
      {spinner}
      {errorMessage}
      {content}
    </>
  );
};


const View = ({ dataChart }) => {
  const { daily } = dataChart
  const data = [
    { name: 'Morning', temperature: daily[0].tempMorning },
    { name: 'Afternoon', temperature: daily[0].temp },
    { name: 'Evening', temperature: daily[0].tempEve },
    { name: 'Night', temperature: daily[0].tempNight },
  ];
  return (
    <ResponsiveContainer width="100%" height={200} className='weatherChart-class'>
      <LineChart data={data} margin={{ top: 10, right: 50, left: 10, bottom: 30 }}>
        <XAxis dataKey="name" />
        <YAxis domain={['dataMin', 'dataMax']} tickCount={10} />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="temperature" stroke="#28639d" activeDot={{ r: 8 }} />
        <Text
          x={200}
          y={330}
          width={400} // Максимальная ширина текста
          className="weather-text" // Класс для стилизации текста
        >
        </Text>
      </LineChart>
    </ResponsiveContainer>
  )
}
export default WeatherChart;

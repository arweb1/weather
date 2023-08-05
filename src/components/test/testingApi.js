import React from 'react'
import useWeatherServices from '../../services/WeatherServices';
import { useEffect } from 'react';

function TestingApi() {
  const {getCurrentWeather} = useWeatherServices()
  useEffect(() => {
    getCurrentWeather()
      
  },[])
  return (
    <div>testingApi</div>
  )
}

export default TestingApi
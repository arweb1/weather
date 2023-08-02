import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text, ResponsiveContainer } from 'recharts';

import './WeatherChart.scss'

const data = [
  { name: 'Morning', temperature: 15 },
  { name: 'Afternoon', temperature: 14 },
  { name: 'Evening', temperature: 16 },
  { name: 'Night', temperature: 12 },
];

const WeatherChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200} className='weatherChart-class'>
      <LineChart data={data} margin={{ top: 10, right: 50, left: 10, bottom: 30 }}>
        <XAxis dataKey="name" />
        <YAxis domain={['dataMin', 'dataMax']} tickCount={10} />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Text
          x={200} // Позиция по оси X
          y={330} // Позиция по оси Y
          width={400} // Максимальная ширина текста
          className="weather-text" // Класс для стилизации текста
        >
        </Text>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeatherChart;

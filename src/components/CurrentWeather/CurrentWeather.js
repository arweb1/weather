import React from 'react'

import { useState, useEffect } from 'react'

import './CurrentWeather.scss'
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import WindPowerOutlinedIcon from '@mui/icons-material/WindPowerOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import WeatherChart from '../WeatherChart/WeatherChart';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import useWeatherServices from '../../services/WeatherServices';

import backgroundImages from '../BackGrounds/backgroundImages';

function CurrentWeather({ selectedCity }) {
    const { loading, error, getWeather, clearError } = useWeatherServices();
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (selectedCity) {
            updateWeather(selectedCity)
        }
    }, [selectedCity])


    const updateWeather = ({ lat, lon }) => {
        if (lat && lon) {
            clearError()
            getWeather(lat, lon)
                .then(onLoaded)
        }
    }

    const onLoaded = (weather) => {
        setWeather(weather)
    }

    const spinner = loading ? <Loader /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    const backgroundImage = weather ? backgroundImages[weather.condition] : null;
    const containerStyle = {
        backgroundImage: backgroundImage || '',
    };
    const content = !(loading || !weather) ? <View data={weather} containerStyle={containerStyle} selectedCity={selectedCity} /> : null;


    return (
        <div className='CurrentWeather' style={containerStyle}>
            {spinner}
            {content}
            {errorMessage}
        </div>
    )
}

const View = ({ data, containerStyle, selectedCity }) => {
    const { city, degrees, windKph, gustKph, localTime, condition, humidity } = data;
    console.log(selectedCity)
    const textStyle = containerStyle.backgroundImage && containerStyle.backgroundImage.includes('light')
        ? { color: '#ffffff' } : {};
    return (
        <>
            <div className="CurrentWeather__leftSide">
                <div className="CurrentWeather__leftSide-firstRow">
                    <span className='city' style={textStyle}>
                        <LocationOnOutlinedIcon />
                        {city}
                    </span>
                    <p className='date' style={textStyle}>{localTime}</p>
                </div>
                <div className="CurrentWeather__leftSide-secondRow">
                    <p className='degrees' style={textStyle}>{degrees} </p>
                    <p className="weather" style={textStyle}>
                        {condition}
                    </p>
                </div>
                <div className="CurrentWeather__leftSide-thirdRow">
                    <span style={textStyle}>
                        <AirOutlinedIcon />
                        {gustKph}
                    </span>
                    <span style={textStyle}>
                        <WaterDropOutlinedIcon />
                        {humidity}%
                    </span>
                    <span style={textStyle}>
                        <WindPowerOutlinedIcon />
                        {windKph}
                    </span>
                </div>
            </div>
            <div className="CurrentWeather__rightSide">
                <span style={textStyle}>Temperature</span>
                <WeatherChart selectedCity={selectedCity} />
            </div>
        </>
    )
}

export default CurrentWeather
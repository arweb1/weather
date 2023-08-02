import React from 'react'

import {useState, useEffect} from 'react'

import './CurrentWeather.scss'
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import WindPowerOutlinedIcon from '@mui/icons-material/WindPowerOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import WeatherChart from '../WeatherChart/WeatherChart';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import useWeatherServices from '../../services/WeatherServices';
import img from '../../resources/backgrounds/clear2.jpg'

import backgroundImages from '../BackGrounds/backgroundImages';

function CurrentWeather() {
    const {loading, error, getWeather, clearEror} = useWeatherServices();
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        updateWeather()
    }, [])

    const updateWeather = () => {
        getWeather()
            .then(onLoaded)
    }

    const onLoaded = (weather) => {
        setWeather(weather)
    }

    const spinner = loading ? <Loader/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    const content = !(loading || !weather) ? <View data={weather}/> : null;

    const backgroundImage = weather ? backgroundImages[weather.condition] : null;
    const containerStyle = {
        backgroundImage: backgroundImage || '',
    };
    
    return (
    <div className='CurrentWeather' style={containerStyle}>
        {spinner}
        {content}
        {errorMessage}
    </div>
  )
}

const View = ({data}) => {
    const {city, degrees, windKph, gustKph, localTime, condition, conditionImage} = data

    return(
        <>
            <div className="CurrentWeather__leftSide">
                <div className="CurrentWeather__leftSide-firstRow">
                    <span className='city'>
                        <LocationOnOutlinedIcon/>
                        {city}
                    </span>
                    <p className='date'>Today {localTime}</p>
                </div>
                <div className="CurrentWeather__leftSide-secondRow">
                    <p className='degrees'>{degrees} <span>°</span></p>
                    <p className="weather">
                        {condition}
                        <img src={conditionImage} alt="conditionImage" />
                    </p>
                </div>
                <div className="CurrentWeather__leftSide-thirdRow">
                    <span>
                        <AirOutlinedIcon/>
                        {gustKph}
                    </span>
                    <span>
                        <WaterDropOutlinedIcon/>
                        32%
                    </span>
                    <span>
                        <WindPowerOutlinedIcon/>
                        {windKph}
                    </span>
                </div>
            </div>
            <div className="CurrentWeather__rightSide">
                <span>Temperature</span>
                <WeatherChart/>
            </div>
        </>
    )
}

export default CurrentWeather
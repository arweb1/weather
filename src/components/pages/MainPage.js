import { useState } from 'react';

import './MainPage.scss';
import HeaderApp from '../HeaderApp/HeaderApp';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import AppWeeklySideBar from "../AppWeeklySidebar/AppWeeklySideBar";
import AppWindStats from '../AppWindStats/AppWindStats';


const MainPage = () => {
    // const handleCityChange = (cityData) => {
    //     onCityChange(cityData); // Передаем выбранный город наверх через callback-функцию
    //   };


    const defaultCity = {
        lat: 50.45466,
        lon: 30.5238
    }
    const [selectedCity, setSelectedCity] = useState(defaultCity);

    const handleCityChange = (cityData) => {
        setSelectedCity(cityData);
    };
    return (
        <>
            <div className="MainPage">
                <div className="mainPage">
                    <HeaderApp onSearchChange={handleCityChange} />
                    <CurrentWeather selectedCity={selectedCity} /> 
                    <AppWindStats selectedCity={selectedCity}/>
                </div>
                <div className="sidebar">
                    <AppWeeklySideBar selectedCity={selectedCity}/>
                </div>
            </div>
        </>
    );
};

export default MainPage;

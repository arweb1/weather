import { useState } from 'react';
import './MainPage.scss';
import HeaderApp from '../HeaderApp/HeaderApp';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import AppWindStats from '../AppWindStats/AppWindStats';

const MainPage = () => {
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
                <HeaderApp onSearchChange={handleCityChange} />
                <CurrentWeather selectedCity={selectedCity} /> 
                <AppWindStats selectedCity={selectedCity}/>
            </div>
        </>
    );
};

export default MainPage;

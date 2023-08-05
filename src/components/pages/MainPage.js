import { useState } from 'react';
import './MainPage.scss';
import HeaderApp from '../HeaderApp/HeaderApp';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import AppWindStats from '../AppWindStats/AppWindStats';

const MainPage = () => {
    const [selectedCity, setSelectedCity] = useState(null);

    const handleCityChange = (cityData) => {
        setSelectedCity(cityData);
    };

    return (
        <>
            <div className="MainPage">
                <HeaderApp onSearchChange={handleCityChange} />
                <CurrentWeather selectedCity={selectedCity} /> {/* Pass selectedCity here */}
                <AppWindStats selectedCity={selectedCity}/>
            </div>
        </>
    );
};

export default MainPage;

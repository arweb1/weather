import './MainPage.scss'
import HeaderApp from '../HeaderApp/HeaderApp'

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import AppWindStats from '../AppWindStats/AppWindStats';


const MainPage = () => {
    return(
        <>
            <div className="MainPage">
                <HeaderApp/>
                <CurrentWeather/>
                <AppWindStats/>
            </div>
        </>
    )
}

export default MainPage
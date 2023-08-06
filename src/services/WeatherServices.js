import { useHttp } from "../components/Hooks/http.hook";

const useWeatherServices = () => {
    const {loading, error, request, clearError} = useHttp();

    // const _apiBase = 'http://api.weatherapi.com/v1/current.json?';
    // const _apiKey = 'key=31df9645a3324df8b7481306230208';

    // // const getWeather = async (city = 'Kiev') => {
    // //     const res = await request(
    // //         `${_apiBase}${_apiKey}&q=${city}&aqi=no`
    // //     )
    // //     return _transformWeatherData(res);
    // // }

    // // const _transformWeatherData = (data) => {
    // //     const { location, current} = data;
    // //     return {
    // //         city: location.name,
    // //         region: location.region,
    // //         country: location.country,
    // //         localTime: location.localtime,
    // //         degrees: current.feelslike_c,
    // //         gustKph: current.gust_kph + ' kp/h',
    // //         isDay: current.is_day,
    // //         windDir: current.wind_dir,
    // //         windKph: current.wind_kph + ' kp/h',
    // //         condition: current.condition.text,
    // //         conditionImage: current.condition.icon,
    // //         humidity: current.humidity,
    // //         pressure: current.pressure_mb
    // //     }
    // // }

    const _apiBase = 'https://api.openweathermap.org/data/2.5';
    const _apiKey = '53b8b14b7d22b2ef912e2a2c19d766d9'

    const getWeather = async (lat, lon) => {
        const res = await request(
            `${_apiBase}/weather?lat=${lat}&lon=${lon}&appid=${_apiKey}`
        )
        return _transformWeatherData(res) 
    }

    const getWeatherForecast = async(lat, lon) => {
        const res = await request(
            `/forecast/hourly?lat=${lat}&lon=${lon}&appid=${_apiKey}`
        )
        console.log(res.json());
    }

    const _transformWeatherData = (data) => {
        return {
            city: data.name,
            localTime: data.timezone / 3600 + 'UTC',
            degrees: (data.main.temp - 273.15).toFixed(1),
            gustKph: data.wind.gust + "m/sec",
            windKph: data.wind.speed + "m/sec",
            windDir: data.wind.deg,
            condition: data.weather[0].main,
            humidity: data.main.humidity,
            pressure: data.main.pressure
        }
    }

    return{
        loading, 
        error,
        getWeather,
        clearError,
    }
}

export default useWeatherServices
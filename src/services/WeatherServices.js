import { useHttp } from "../components/Hooks/http.hook";
import {DateTime} from 'luxon'

const useWeatherServices = () => {
    const {loading, error, request, clearError} = useHttp();

    const _apiBase = 'http://pro.openweathermap.org';
    const _apiKey = '53b8b14b7d22b2ef912e2a2c19d766d9'

    const getWeather = async (lat, lon) => {
        const res = await request(
            `${_apiBase}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${_apiKey}`
        )
        return _transformWeatherData(res) 
    }

    const getWeatherForecast = async (lat, lon) => {
        const res = await request(
            `${_apiBase}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${_apiKey}`
        )
        return _transformForecasWeather(res)
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
    
    const formatLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

    const _transformForecasWeather= (data) => {
        let {daily, hourly, timezone} = data;
        daily = daily.slice(1,10).map(d => {
            return{
                title: d.weather[0].main,
                icon: d.weather[0].icon,
                temp: (d.temp.day - 273.15).toFixed(1),
                localTime: formatLocalTime(d.dt, timezone, "ccc")
            }
        })
        hourly = hourly.slice(1,6).map(d => {
            return{
                title: d.weather[0].main,
                icon: d.weather[0].icon,
                temp: (d.temp - 273.15).toFixed(1),
                localTime: formatLocalTime(d.dt, timezone, "hh:mm a")
            }
        })
        return {daily, hourly, timezone}
    }


    return{
        loading, 
        error,
        getWeather,
        getWeatherForecast,
        clearError,
    }
}

export default useWeatherServices
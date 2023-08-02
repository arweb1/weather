import { useHttp } from "../components/Hooks/http.hook";

const useWeatherServices = () => {
    const {loading, error, request, clearError} = useHttp();

    const _apiBase = 'http://api.weatherapi.com/v1/current.json?';
    const _apiKey = 'key=31df9645a3324df8b7481306230208';

    const getWeather = async () => {
        const res = await request(
            `${_apiBase}${_apiKey}&q=Kiev&aqi=no`
        )
        return _transformWeatherData(res);
    }

    const _transformWeatherData = (data) => {
        const { location, current} = data;
        return {
            city: location.name,
            region: location.region,
            country: location.country,
            localTime: location.localtime,
            degrees: current.feelslike_c,
            gustKph: current.gust_kph + ' kp/h',
            isDay: current.is_day,
            windDir: current.wind_dir,
            windKph: current.wind_kph + ' kp/h',
            condition: current.condition.text,
            conditionImage: current.condition.icon
        }
    }

    return{
        loading, 
        error,
        getWeather,
        clearError
    }
}

export default useWeatherServices
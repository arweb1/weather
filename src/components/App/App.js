import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { MainPage, MapPage } from "../pages"

import {useEffect} from 'react'

import AppSidebar from "../AppSidebar/AppSidebar";
import AppWeeklySideBar from "../AppWeeklySidebar/AppWeeklySideBar";
import './App.scss'

import useWeatherServices from "../../services/WeatherServices";

const App = () => {
    const {getWeather} = useWeatherServices();

    useEffect(() => {
        updateChar()
    }, [])

    const updateChar = () => {
        getWeather()
            .then(item => console.log(item))
    }
    return(
        <Router>
            <div className="app">
                <AppSidebar/>
                <main className="main">
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/map" element={<MapPage/>}/>
                    </Routes>
                </main>
                <AppWeeklySideBar/>
            </div>
        </Router>
    )
}

export default App
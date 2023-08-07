import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { MainPage, MapPage } from "../pages"

import {useState, useEffect} from 'react'

import AppSidebar from "../AppSidebar/AppSidebar";
import AppWeeklySideBar from "../AppWeeklySidebar/AppWeeklySideBar";
import TestingApi from "../test/testingApi";
import './App.scss'

const App = () => {
    // const defaultCity = {
    //     lat: 50.45466,
    //     lon: 30.5238
    // }
    // const [selectedCity, setSelectedCity] = useState(defaultCity);

    // const handleCityChange = (cityData) => {
    //     setSelectedCity(cityData);
    // };

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
                {/* <AppWeeklySideBar selectedCity={selectedCity}/> */}
            </div>
        </Router>
    )
}

export default App
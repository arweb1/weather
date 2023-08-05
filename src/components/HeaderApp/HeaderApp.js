import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import profilePicture from '../../resources/profile-picture.jpg';
import './HeaderApp.scss';
import SearchCity from '../SearchCity/SearchCity';

function HeaderApp({ onSearchChange }) {
    const handleCityChange = (selectedOption) => {
        const selectedCity = selectedOption ? selectedOption.value : null;
        onSearchChange(selectedCity); // Call the event handler with the selected city
    };
    return (
        <div className="HeaderApp">
            <div className="HeaderApp__search">
                <SearchOutlinedIcon className="icon" />
                <SearchCity onSearchChange={handleCityChange} />
            </div>
            <div className="HeaderApp__profile">
                <NotificationAddOutlinedIcon className="icon" />
                <img src={profilePicture} className="profilePicture"></img>
            </div>
        </div>
    );
}

export default HeaderApp;

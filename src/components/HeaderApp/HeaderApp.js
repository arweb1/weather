// HeaderApp.js
import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import profilePicture from '../../resources/profile-picture.jpg';
import './HeaderApp.scss';
import SearchCity from '../SearchCity/SearchCity';

function HeaderApp({ onSearchChange }) {
  const handleCityChange = (selectedOption) => {
    const [lat, lon] = selectedOption.value.split(' ');
    console.log(lat, lon);
    onSearchChange({lat, lon});
  };
  return (
    <div className="HeaderApp">
      <div className="HeaderApp__search">
        <SearchOutlinedIcon className="icon" />
        <SearchCity onSearchChange={handleCityChange} />
      </div>
      <div className="HeaderApp__profile">
        <NotificationAddOutlinedIcon className="icon" />
        <img src={profilePicture} className="profilePicture" alt="Profile" />
      </div>
    </div>
  );
}

export default HeaderApp;

import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import profilePicture from '../../resources/profile-picture.jpg'
import './HeaderApp.scss'

function HeaderApp() {
  return (
    <div className='HeaderApp'>
        <div className="HeaderApp__search">
            <SearchOutlinedIcon className="icon"/>
            <input type="text" placeholder='Search something here...'/>
        </div>
        <div className="HeaderApp__profile">
            <NotificationAddOutlinedIcon className="icon"/>
            <img src={profilePicture} className="profilePicture"></img>
        </div>
    </div>
  )
}

export default HeaderApp
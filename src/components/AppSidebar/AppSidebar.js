import React from 'react'
import './AppSidebar.scss'
import {SidebarData} from './SidebarData'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../resources/Logo.png'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function AppSidebar() {

  return (
        <div className='Sidebar'>
            <Link to="/" className="Sidebar__logo">
                <img src={logo} alt="logo" />
            </Link>
            <ul className="Sidebar__list">
                    {SidebarData.map((val, key) => {
                        return (
                            <li key={key} className="Sidebar__list-row">
                              <NavLink
                                to={val.link}
                                className="Sidebar__list-row-link"
                              >
                                <div>{val.icon}</div>
                                <p>{val.title}</p>
                              </NavLink>
                            </li>
                          );
                    })}
            </ul>
            <div className="Sidebar__logOut">
                <button>
                    <LogoutOutlinedIcon/>
                    <p>Log Out</p>
                </button>
            </div>
        </div>
  )
}

export default AppSidebar
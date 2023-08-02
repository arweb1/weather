import React from 'react'
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const SidebarData = [
    {
        title: 'Dashboard',
        icon: <SpaceDashboardOutlinedIcon/>,
        link:  '/'
    },
    {
        title: 'Map',
        icon: <MapOutlinedIcon/>,
        link:  '/map'
    },
    {
        title: 'Saved Location',
        icon: <FavoriteBorderOutlinedIcon/>,
        link:  '/saved'
    },
    {
        title: 'Calendar',
        icon: <CalendarMonthOutlinedIcon/>,
        link:  '/calendar'
    },
    {
        title: 'Settings',
        icon: <SettingsOutlinedIcon/>,
        link:  '/settings'
    },
]


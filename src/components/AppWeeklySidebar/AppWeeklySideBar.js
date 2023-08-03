import React from 'react'
import './AppWeeklySidebar.scss'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined';


function AppWeeklySideBar() {
  return (
    <div className='AppWeeklySideBar'>
        <div className="AppWeeklySideBar__chooseWeek">
            <ArrowBackIosNewOutlinedIcon className='icon'/>
            <p>This Week</p>
            <ArrowForwardIosOutlinedIcon className='icon'/>
        </div>
        <div className="AppWeeklySideBar__today">
            <p>Today</p>
            <div className="AppWeeklySideBar__today-list">
                <div className="AppWeeklySideBar__today-list-data active">
                    <div className="time">Now</div>
                    <WbCloudyOutlinedIcon className='icon'/>
                    <div className="weather">24°</div>
                </div>
                <div className="AppWeeklySideBar__today-list-data">
                    <div className="time">Now</div>
                    <WbCloudyOutlinedIcon className='icon'/>
                    <div className="weather">24°</div>
                </div>
                <div className="AppWeeklySideBar__today-list-data">
                    <div className="time">Now</div>
                    <WbCloudyOutlinedIcon className='icon'/>
                    <div className="weather">24°</div>
                </div>
                <div className="AppWeeklySideBar__today-list-data">
                    <div className="time">Now</div>
                    <WbCloudyOutlinedIcon className='icon'/>
                    <div className="weather">24°</div>
                </div>
            </div>
        </div>
        <div className="AppWeeklySideBar__nextDays">
            <div className="AppWeeklySideBar__nextDays-day">
                <div className="AppWeeklySideBar__nextDays-day-text">
                    <p className='day'>Tomorrow</p>
                    <p className='data'>1 Aug</p>
                </div>
                <p>16°</p>
                <WbCloudyOutlinedIcon className='icon'/>
            </div>
            <div className="AppWeeklySideBar__nextDays-day">
                <div className="AppWeeklySideBar__nextDays-day-text">
                    <p className='day'>Tomorrow</p>
                    <p className='data'>1 Aug</p>
                </div>
                <p>16°</p>
                <WbCloudyOutlinedIcon className='icon'/>
            </div>
            <div className="AppWeeklySideBar__nextDays-day">
                <div className="AppWeeklySideBar__nextDays-day-text">
                    <p className='day'>Tomorrow</p>
                    <p className='data'>1 Aug</p>
                </div>
                <p>16°</p>
                <WbCloudyOutlinedIcon className='icon'/>
            </div>
            <div className="AppWeeklySideBar__nextDays-day">
                <div className="AppWeeklySideBar__nextDays-day-text">
                    <p className='day'>Tomorrow</p>
                    <p className='data'>1 Aug</p>
                </div>
                <p>16°</p>
                <WbCloudyOutlinedIcon className='icon'/>
            </div>
            <div className="AppWeeklySideBar__nextDays-day">
                <div className="AppWeeklySideBar__nextDays-day-text">
                    <p className='day'>Tomorrow</p>
                    <p className='data'>1 Aug</p>
                </div>
                <p>16°</p>
                <WbCloudyOutlinedIcon className='icon'/>
            </div>
            <div className="AppWeeklySideBar__nextDays-day">
                <div className="AppWeeklySideBar__nextDays-day-text">
                    <p className='day'>Tomorrow</p>
                    <p className='data'>1 Aug</p>
                </div>
                <p>16°</p>
                <WbCloudyOutlinedIcon className='icon'/>
            </div>
            <div className="AppWeeklySideBar__nextDays-day">
                <div className="AppWeeklySideBar__nextDays-day-text">
                    <p className='day'>Tomorrow</p>
                    <p className='data'>1 Aug</p>
                </div>
                <p>16°</p>
                <WbCloudyOutlinedIcon className='icon'/>
            </div>
            <div className="AppWeeklySideBar__nextDays-day">
                <div className="AppWeeklySideBar__nextDays-day-text">
                    <p className='day'>Tomorrow</p>
                    <p className='data'>1 Aug</p>
                </div>
                <p>16°</p>
                <WbCloudyOutlinedIcon className='icon'/>
            </div>
            <div className="AppWeeklySideBar__nextDays-day">
                <div className="AppWeeklySideBar__nextDays-day-text">
                    <p className='day'>Tomorrow</p>
                    <p className='data'>1 Aug</p>
                </div>
                <p>16°</p>
                <WbCloudyOutlinedIcon className='icon'/>
            </div>
            
        </div>
    </div>
  )
}

export default AppWeeklySideBar
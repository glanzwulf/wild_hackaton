import React from 'react';
import moment from 'moment';
import './Header.css'

const Header = () => {
    const title = 'Hello friend!'
    const Date = moment().format('MMMM Do');
    const Day = moment().format('dddd'); 
    
    return (
    <div className="header-box">
        <img className="logo" src="https://i.imgur.com/T36XyUd.png" alt="mento logo" />
        <h1 className="headerclass">{title} 👋</h1>
        <h3 className="headerclass">Today is: {Day}, {Date}</h3>
        {/* <span className="welcome">Welcome to...</span> */}
    </div>
)
}

export default Header;
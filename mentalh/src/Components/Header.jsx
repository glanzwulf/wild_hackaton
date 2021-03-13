import React from 'react';
import moment from 'moment';
import './Header.css'

const Header = () => {
    const title = 'Hello friend!'
    const Date = moment().format('MMMM Do');
    const Day = moment().format('dddd'); 
    
    return (
    <div className="header-box">
        <h1>{title} 👋</h1>
        <h3>Today is: {Day}, {Date}</h3>
    </div>
)
}

export default Header;
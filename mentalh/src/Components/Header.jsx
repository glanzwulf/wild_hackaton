import React from 'react';
import moment from 'moment';

const Header = () => {
    const title = 'Hello!'
    let username = `Pedro`;
    const Date = moment().format('MMMM Do');
    const Day = moment().format('dddd'); 
    
    return (
    <div>
        {title}
        {username}
        <p>Today is: {Day}</p>
        {Date}
    </div>
)
}

export default Header;
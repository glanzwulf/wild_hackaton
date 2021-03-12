import React from 'react';
import moment from 'moment';
import './Profile.css'

const Profile = () => {
    let username = 'Vlad';
    const Date = moment().format('MMMM Do');
    const Day = moment().format('dddd'); 
    
    return (
        <div className="Profile">
            <div className="ProfileHeader">
                <h1>Hello {username}</h1>
                <h3>Today is: {Day}</h3>
            </div>
            <div className="MoodsOverTime">
                <h1>Moods over time</h1>
                <img className="graph" src="http://expatchild.com/wp-content/uploads/2012/11/Culture-shock-graph-basic.jpg" />
            </div>
        </div>
)
}

export default Profile;
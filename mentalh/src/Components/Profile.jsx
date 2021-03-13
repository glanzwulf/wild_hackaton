import React, { useState } from 'react';
import moment from 'moment';
import './Profile.css'

const Profile = () => {
    const Day = moment().format('dddd'); 
    const [showForm, setShowForm] = useState(false);
    const [userName, setUserName] = useState("")

    return (
        <div className="Profile">
            <div className="ProfileHeader">
                <h1>Hello {userName}</h1>
                <h3>Today is: {Day}</h3>
                <p>We would like to get to know you a little bit better. What's your name?</p>
                <button className="profile-name-btn" onClick={() => setShowForm(!showForm)}>This will be a button with onclick open form</button>
                {showForm && (
                    <form>
                    <label>
                        Name:
                        <input type="text" onChange={e => setUserName(e.target.value)}/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                )}
            </div>
            <div className="MoodsOverTime">
                <h1>Moods over time</h1>
                <img className="graph" src="http://expatchild.com/wp-content/uploads/2012/11/Culture-shock-graph-basic.jpg" />
                <p>This is a placeholder</p>
            </div>
        </div>
)
}

export default Profile;
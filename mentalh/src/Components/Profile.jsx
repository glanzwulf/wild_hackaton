import React, { useState } from 'react';
import moment from 'moment';
import Navbar from './Navbar'
import './Profile.css'

const Profile = () => {
    const Day = moment().format('dddd'); 
    const [showForm, setShowForm] = useState(false);
    const [userName, setUserName] = useState("")
    const [headingText, setHeading] = useState("");
    function handleChange(event) {
        setUserName(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        setHeading(userName)
        setShowForm(!showForm)
    }
    <Navbar />
    
    return (
        <div className="Profile">
            <div className="ProfileHeader">
                <h1>Hello {headingText}</h1>
                <h3>Today is: {Day}</h3>
                <p>We would like to get to know you a little bit better. What's your name?</p>
                <button className="profile-name-btn" onClick={() => setShowForm(!showForm)}>Change name</button>
                {showForm && (
                    <form>
                    <label>
                        Name:
                        <input type="text" onChange={handleChange} value={userName}/>
                        </label>
                        <button onClick={handleSubmit}>Submit</button>
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
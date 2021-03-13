import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Activity.css'

 const ActivityDetails = (props) => {
    const activityId = props.match.params.id
    const [activity, setActivity] = useState([]);
    console.log(activityId)
    useEffect(() => {
        axios
        .get(`https://a.nacapi.com/George-Stacy-OliveDrab/${activityId}`)
        .then((res) => {
            setActivity(res.data);
        })
    }, [activityId]);  

    console.log(activity)
    console.log(activity.yogaPose)

    return (
        <div>
            <div className="activity-container">
                <div className="activity-details">
                    <img src={activity.yogaposeimage1} alt={activity.yogaposename1} className="activity-image"/> 
                    <h1 className="act-h1">Name</h1>
                    <p className="act-h1">{activity.yogaposename1}</p>
                    <h1 className="act-h1">Description</h1>
                    <p className="act-h1">{activity.yogaposedescription1}</p>
                </div>
            </div>
            <div className="activity-container">
                <div className="activity-details">
                    <img src={activity.yogaposeimage2} alt={activity.yogaposename2} className="activity-image"/> 
                    <h1 className="act-h1">Name</h1>
                    <p className="act-h1">{activity.yogaposename2}</p>
                    <h1 className="act-h1">Description</h1>
                    <p className="act-h1">{activity.yogaposedescription2}</p>
                </div>
            </div>
            <div className="activity-container">
                <div className="activity-details">
                    <img src={activity.yogaposeimage3} alt={activity.yogaposename3} className="activity-image"/> 
                    <h1 className="act-h1">Name</h1>
                    <p className="act-h1">{activity.yogaposename3}</p>
                    <h1 className="act-h1">Description</h1>
                    <p className="act-h1">{activity.yogaposedescription3}</p>
                </div>
            </div>
        </div>
    )
}

export default ActivityDetails;

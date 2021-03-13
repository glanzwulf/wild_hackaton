import React, { useEffect, useState } from 'react'
import axios from 'axios';

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
            {/* <div className="activity-container">
                <img src={activity.image} alt={activity.title}/> 
            </div> */}
            <div className="doctor-details">
                <h1>Name</h1>
                <p>{activity.yogaPose1}</p>
                <h1>Description</h1>
                <p>{activity.yogaPose2}</p>
            </div>
        </div>
    )
}

export default ActivityDetails;

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Activity from './Activity'
import './Activity.css'


const ActivityList = () => {
    const [activity, setActivity] = useState([]);

    useEffect(() => {
        axios
        .get(`https://a.nacapi.com/George-Stacy-OliveDrab`)
        .then((res) => {
            setActivity(res.data);
        })
    });
    
    return (
        <div className='ActivityList'>
            <div className="actiBox">
                <h1 className="act-h1">Activities</h1>
                {
                activity.map((activity) => (
                        <Activity key={activity.id} activity={activity} />
                ))}
                <div className="ActivityBox"></div>
            </div> 
        </div>
    )
}

export default ActivityList;
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Activity from './Activity'
import LoadingSpinner from "./LoadingSpinner";
import './Activity.css'


const ActivityList = () => {
    const [activity, setActivity] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios
        .get(`https://a.nacapi.com/George-Stacy-OliveDrab`)
        .then((res) => {
            setActivity(res.data);
            setLoading(true);
        })
    });
    
    return (
        <div>{loading ? (
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
        ) : (
            <LoadingSpinner />
            )}
            </div>
    )
}

export default ActivityList;
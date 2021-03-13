import React, { useEffect, useState } from 'react'
import Activity from './Activity'
import { Link } from "react-router-dom";
import activities from './activity_data'
import './Activity.css'


export default function ActivityList(props) {
    return (
        <div className='ActivityList'>
            <div><h1 className="act-h1">Activities</h1>
                {
                    activities.map((activity) => (
                        <Link to="/name" key={activity.name}>
                          <Activity name={activity.name} emoji={activity.emoji} backgroundC={activity.backgroundC}/>
                        </Link>
                    ))}
            </div> 
        </div>
    )
}

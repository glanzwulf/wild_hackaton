import React, { useEffect, useState } from 'react'
import Activity from './Activity'
import './App.css'

export default function ActivityList(props) {
    return (
        <div className='ActivityList'>
           <ul>
                {
                    activities.map(activity => <li key={activity.name}>{...activity}</li>)
                }
            </ul> 
        </div>
    )
}

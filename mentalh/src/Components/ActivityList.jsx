import React, { useEffect, useState } from 'react'
import Activity from './Activity'
import activities from './activity_data'

export default function ActivityList(props) {
    return (
        <div className='ActivityList'>
            <ul>
                {
                    activities.map((activity) => (
                        <div key={activity.name}>
                          <Activity name={activity.name} emoji={activity.emoji}/>
                        </div>
                    ))}
            </ul> 
        </div>
    )
}

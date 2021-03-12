import React, { useEffect, useState } from 'react'
import Activity from './Activity'
import activities from './activity_data'

export default function ActivityList(props) {
    return (
        <div className='ActivityList'>
           <ul>
                {
                    activities.map((activity) => (
                        <div key={activity}>
                          <Activity name={activity} />
                        </div>
                    ))}
            </ul> 
        </div>
    )
}

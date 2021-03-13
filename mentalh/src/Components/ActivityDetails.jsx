import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

 const ActivityDetails = (props) => {
    const [description, setDescription] = useState([]);
    const activityId = props.match.params.id;

    useEffect(() => {
        axios
        .get(`https://a.nacapi.com/Activity/${activityId}`)
        .then((res) => {
            setDescription(res.data);
        })
    }, [activityId]);     
    console.log(activityId)
    return (
        <div className="ActivityDetails">
            <Link to={{pathname: '/'}}>Go back</Link>
           {/*<h2>{ActivityName}:</h2>*/}
            <p>Home</p>
        </div>
    )
}

export default ActivityDetails

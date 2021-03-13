import React from 'react'
import './Activity.css'
import { Link } from "react-router-dom";

const Activity = (props) => {
    const { activity } = props;
    const divStyle = {
        backgroundColor: activity.backgroundC
    };

    return (
        <Link to={{ pathname: `/activities/${activity.id}`}}>
        <div className="MainActivityCard">
            <div className="Activity" style={divStyle}>
                <div className="emoji">{activity.emoji}</div>
                <div className="name">{activity.name}</div>
            </div>
        </div>
        </Link>
    )
}
export default Activity;
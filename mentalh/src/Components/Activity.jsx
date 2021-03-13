import React from 'react'
import './Activity.css'

export default function Activity({ name, emoji, backgroundC }) {
    const divStyle = {
        backgroundColor:backgroundC
    }
    console.log({backgroundC})
    return (
        <div className="MainActivityCard">
            <div className="Activity" style={divStyle}>
                <div className="emoji">{emoji}</div>
                <div className="name">{name}</div>
            </div>
        </div>
    )
}

import React from 'react'
import './Activity.css'

export default function Activity({ name, emoji }) {
    return (
        <div className="Activity">
            <div className="emoji">{emoji}</div>
            <div className="name">{name}</div>
        </div>
    )
}

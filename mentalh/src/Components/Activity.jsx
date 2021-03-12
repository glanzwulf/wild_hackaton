import React from 'react'
import './App.css'

export default function Activity({ name, emoji }) {
    return (
        <div className="Activity">
            <div className="emoji">
                <img 
                    src={emoji}
                    alt="name"
                />
            </div>
            <div className="name">{name}</div>
        </div>
    )
}

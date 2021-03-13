import React from 'react'
import magnif from 'magnif.gif'

export default function FullPageLoader() {
    return (
        <div className="fp-container">
            <img src={magnif} className="fp-loader" alt="loading" />
        </div>
    )
}
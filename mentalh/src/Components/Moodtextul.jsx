import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import './Moods.css';



export default function Moodtextul() {
    return (
        <div className="Mood">
            
           <h1>How are you feeling today?</h1>

            <ul className="MoodUl">
                <li className="MoodButton"><Link to='/happy'><p>😀</p></Link></li>
                <li className="MoodButton"><Link to='/lesshappy'><p>🙂</p></Link></li>
                <li className="MoodButton"><Link to='/sad'><p>😐</p></Link></li>
                <li className="MoodButton"><Link to='/moresad'><p>☹️</p></Link></li>
            </ul>
        </div>
    )
}
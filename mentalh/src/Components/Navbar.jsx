import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul className='Navigation'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/activity'>Activity</Link></li>
                <li><Link to='/Profile'>Profile</Link></li>
            </ul>
        </div>
    )
}
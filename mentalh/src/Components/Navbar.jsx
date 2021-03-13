import React from 'react'
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import './Navbar.css'

  
  export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
  
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className='navbar'
      >
        <BottomNavigationAction label="Home" component={Link} to='/' icon={<HomeIcon/>} />
        <BottomNavigationAction label="Activities" component={Link} to='/activity' icon={<AccessibilityNewIcon />} />
        <BottomNavigationAction label="Doctor" component={Link} to='/professional' icon={<LocalHospitalIcon />} />
        <BottomNavigationAction label="Profile" component={Link} to='/profile'icon={<AccountBoxIcon />} />
      </BottomNavigation>
    );
  }
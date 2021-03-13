
import Navbar from './Components/Navbar'
import ActivityDetails from './Components/ActivityDetails'
import Profile from './Components/Profile'
import MainPage from './Components/MainPage'

import "./App.css"

import {Switch ,Route} from 'react-router-dom';
import Happy from './Components/Happy';
import Lesshappy from './Components/Lesshappy';
 import Moresad from './Components/Moresad';
import Sad from './Components/Sad';
 

function App() {

  return (
    <div className="App"> 
   <Switch>
       <Route  path='/happy' component={Happy}/>
       <Route path='/lesshappy' component={Lesshappy}/>
       <Route path='/moresad' component={Moresad}/>
       <Route path='/sad' component={Sad}/>
     </Switch>

         <Navbar />
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/name' component={ActivityDetails} />
            <Route path='/profile' component={Profile} />
        </Switch> 
    </div>
  );
}

export default App;
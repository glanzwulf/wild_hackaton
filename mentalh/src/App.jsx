import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import ActivityDetails from './Components/ActivityDetails'
import Profile from './Components/Profile'
import MainPage from './Components/MainPage'
import ActivityList from './Components/ActivityList'
import "./App.css"

function App() {

  return (
    <div className="App"> 
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
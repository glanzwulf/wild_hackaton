import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import ActivityDetails from './Components/ActivityDetails'
import Profile from './Components/Profile'
import MainPage from './Components/MainPage'
import ActivityList from './Components/ActivityList'
import ProfessionalList from './Components/ProfessionalList'
import ProfessionalDetails from './Components/ProfessionalDetails'
import "./App.css"

function App() {

  return (
    <div className="App"> 
        <Navbar />
        <Switch>
            {/* <Route exact path='/' component={MainPage} />
            <Route path='/name' component={ActivityDetails} />
            <Route path='/profile' component={Profile} /> */}
            <Route exact path='/' component={ProfessionalList} />
            <Route path='/:id' component={ProfessionalDetails} />
        </Switch>
    </div>
  );
}

export default App;
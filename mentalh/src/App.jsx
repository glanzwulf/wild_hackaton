import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import ActivityDetails from './Components/ActivityDetails'
import ActivityList from './Components/ActivityList'
import Profile from './Components/Profile'
import MainPage from './Components/MainPage'
import "./App.css"

function App() {

  const [loader, showLoader, hideLoader] = useFullPageLoader()

  return (
    <div className="App"> 
        <Navbar />
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/activity' component={ActivityList} />
            <Route path='/activity/:id' component={ActivityDetails} />
            <Route path='/profile' component={Profile} />
        </Switch>
        {loader}
    </div>
  );
}

export default App;
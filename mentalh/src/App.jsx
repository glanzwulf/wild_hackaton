
import Navbar from './Components/Navbar'
import ActivityDetails from './Components/ActivityDetails'
import Profile from './Components/Profile'
import MainPage from './Components/MainPage'
import ActivityList from './Components/ActivityList'
import ProfessionalList from './Components/ProfessionalList'
import ProfessionalDetails from './Components/ProfessionalDetails'
import "./App.css"
import {Switch ,Route} from 'react-router-dom';
import Happy from './Components/Happy';
import Lesshappy from './Components/Lesshappy';
import Moresad from './Components/Moresad';
import Sad from './Components/Sad';

function App() {

  const [loader, showLoader, hideLoader] = useFullPageLoader()

  return (
    <div className="App"> 
  
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route  path='/happy' component={Happy}/>
      <Route path='/lesshappy' component={Lesshappy}/>
      <Route path='/moresad' component={Moresad}/>
      <Route path='/sad' component={Sad}/>
      <Route path='/profile' component={Profile} />
      <Route exact path='/professional' component={ProfessionalList} />
      <Route path='/professionals/:id' component={ProfessionalDetails} />
      
    </Switch>
        <Navbar />
        {/* <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/name' component={ActivityDetails} />
            <Route exact path='/professionals' component={ProfessionalList} />
            <Route path='/professionals/:id' component={ProfessionalDetails} />
        </Switch> */}
    </div>
  );
}

export default App;
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar'
// import Header from './Components/Header'
// import Mood from './Components/Mood'
// import MoodText from './Components/MoodText'
// import ActivityList from './Components/ActivityList'
// import ActivityDetails from './Components/ActivityDetails'
// import Footer from './Components/Footer'
import Happy from './Components/Happy';

function App() {
  return (
    <div className="App">
      <Happy />
      {/* <Router>
        <Navbar />
        <Header />
        <Mood />
        <MoodText />
          <Switch>
            <Route exact path='/' component={ActivityList} />
            <Route path='/:name' component={ActivityDetails} />
          </Switch>
        <Footer />
      </Router> */}
    </div>
  );
}

export default App;
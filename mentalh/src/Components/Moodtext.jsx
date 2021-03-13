import React, { Component } from 'react';
import Happy from './Happy';
import Lesshappy from './Lesshappy';
import Moresad from './Moresad';
import Sad from './Sad';
import Usebutton from './Usebutton';
import './Moods.css'

class Moodtext extends Component {
    constructor() {
      super();
      this.state = {
        name: "React",
        showHideHappy: false,
        showHideLesshappy: false,
        showHideMoresad: false,
        showHideSad: false
      };
      this.hideComponent = this.hideComponent.bind(this);
    }
  
    hideComponent(name) {
      console.log(name);
      switch (name) {
        case "showHideHappy":
          this.setState({ showHideHappy: this.state.showHideHappy });
          break;
        case "showHideLesshappy":
          this.setState({ showHideLesshappy: this.state.showHideLesshappy });
          break;
        case "showHideMoresad":
          this.setState({ showHideMoresad: this.state.showHideMoresad });
          break;
          case "showHideSad":
          this.setState({ showHideSad: this.state.showHideSad });
          break;
        default:
          this.setState(null);
      }
    }
    render(){
        const { showHideHappy, showHideLesshappy, showHideMoresad,showHideSad } = this.state;
        return (
          <div>
            {/* {showHideHappy && <Happy />}
            <hr />
            {showHideLesshappy && <Lesshappy />}
            <hr />
            {showHideMoresad && <Moresad />}
            <hr />
            {showHideSad && <Sad/>}
            <hr /> */}
            <div className="Mood">
            <h1>How are you feeling today?</h1>  
            <div className="Moods">
              <button className="MoodButton" onClick={() => this.hideComponent("showHideHappy")}>
              <p>😀</p>
              </button>
              <button className="MoodButton" onClick={() => this.hideComponent("showHideLesshappy")}>
              <p>🙂</p>
              </button>
              <button className="MoodButton" onClick={() => this.hideComponent("showHideMoresad")}>
              <p>☹️</p>
              </button>
              <button className="MoodButton"onClick={() => this.hideComponent("showHideSad")}>
              <p>😐</p>
              </button>
            </div>
          </div>
          <Usebutton />
          {showHideHappy && <Happy />}
    
            {showHideLesshappy && <Lesshappy />}

            {showHideMoresad && <Moresad />}
        
            {showHideSad && <Sad/>}
            
        
          </div>
    
        );
      }
}
export default Moodtext;
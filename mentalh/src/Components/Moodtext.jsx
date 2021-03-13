// import React, { Component } from 'react';
// import Happy from './Happy';
// import Lesshappy from './Lesshappy';
// import Moresad from './Moresad';
// import Sad from './Sad';
// import Usebutton from './Usebutton';
// import './Moods.css'

// class Moodtext extends Component {
//     constructor() {
//       super();
//       this.state = {
//         name: "React",
//         showHideHappy: false,
//         showHideLesshappy: false,
//         showHideMoresad: false,
//         showHideSad: false
//       };
//       this.hideComponent = this.hideComponent.bind(this);
//     }
  
//     hideComponent(name) {
//       console.log(name);
//       switch (name) {
//         case "showHideHappy":
//           this.setState({ showHideHappy: this.state.showHideHappy ||( !this.state.showHideLesshappy&&(!this.state.showHideMoresad) && (!this.state.showHideSad))});
//           break;
//         case "showHideLesshappy":
//           this.setState({ showHideLesshappy: this.state.showHideLesshappy ||( !this.state.showHideHappy && (!this.state.showHideMoresad) && (!this.state.showHideSad ))});
//           break;
//         case "showHideMoresad":
//           this.setState({ showHideMoresad: this.state.showHideMoresad ||(!this.state.showHideHappy && (!this.state.showHideLesshappy) && (!this.state.showHideSad))});
//           break;
//           case "showHideSad":
//           this.setState({ showHideSad: this.state.showHideSad || (!this.state.showHideHappy && (!this.state.showHideMoresad )&& (!this.state.showHideLesshappy ))});
//           break;
//         default:
//           this.setState(null);
//       }
//     }
    
//     render(){
//         const { showHideHappy, showHideLesshappy, showHideMoresad,showHideSad } = this.state;
//         return (
//           <div>
//              {/* {showHideHappy && <Happy />}
//             <hr />
//             {showHideLesshappy && <Lesshappy />}
//             <hr />
//             {showHideMoresad && <Moresad />}
//             <hr />
//             {showHideSad && <Sad/>}
//             <hr />  */}
//             <div className="Mood">
//             <h1>How are you feeling today?</h1>  
//             <div className="Moods">
//               <button className="MoodButton" onClick={() => this.hideComponent("showHideMoresad")}>
//               <p>☹️</p>
//               </button>
//               <button className="MoodButton"onClick={() => this.hideComponent("showHideSad")}>
//               <p>😐</p>
//               </button>
//               <button className="MoodButton" onClick={() => this.hideComponent("showHideHappy")}>
//               <p>😀</p>
//               </button>
//               <button className="MoodButton" onClick={() => this.hideComponent("showHideLesshappy")}>
//               <p>🙂</p>
//               </button>
//             </div>
//           </div>
//           <Usebutton />
//           {showHideHappy && <Happy />}
//             {showHideLesshappy && <Lesshappy />}
//             {showHideMoresad && <Moresad />}
//             {showHideSad && <Sad/>}

//           </div>
    
//         );
//       }
// }
// export default Moodtext;

import React, { Component } from 'react';
import {Switch ,Route} from 'react-router-dom';
 import Happy from './Happy';
import Lesshappy from './Lesshappy';
 import Moresad from './Moresad';
import Sad from './Sad';
 
 function Moodtext() {
  return (
    <div className="moodtext">
     
     <Switch>
       <Route exact path='/' component={Happy}/>
       <Route path='/lesshappy' component={Lesshappy}/>
       <Route path='/moresad' component={Moresad}/>
       <Route path='/sad' component={Sad}/>
     </Switch>
    
    </div>
  );
}

export default Moodtext;
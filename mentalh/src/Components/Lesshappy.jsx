import React, { Component } from 'react'
import './Moodtext.css';
import Header from './Header';
import Moodtextul from './Moodtextul';
import ActivityList from './ActivityList';

export default class Lesshappy extends Component {
    constructor(){
        super();
        this.state={
            name:"react"
        };
    }
    render() {
        return (
            <div className="lesshappy">
                 <Header />
                <Moodtextul />
            <h2 className="moodtextstuff">Thank you. 🙂 Your response has been recorded.</h2>
            <p className="moodtextstuff">Looks like you could cheer up a little bit today.</p>
            <p className="moodtextstuff">Here are some activities that will get you to 💯</p>
            <ActivityList />
        </div>
        )
    }
}

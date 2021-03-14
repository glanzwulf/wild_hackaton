import './Moodtext.css';
import React, { Component } from 'react'
import Header from './Header';
import Moodtextul from './Moodtextul';
import ActivityList from './ActivityList';

export default class Moresad extends Component {
    constructor(){
        super();
        this.state={
            name:"react"
        };
    }
    render() {
        return (
            <div className="moresad">
            <Header />
            <Moodtextul />
            <h2 className="moodtextstuff">Sorry to hear that. 😟 Your response has been recorded.</h2>
            <p className="moodtextstuff">But don't Worry! We are here to help you, and you know, we've all been there and sometimes there are days like that</p>
            <p className="moodtextstuff">We do have something that can help you cheer up 👍</p>
            <ActivityList />
        </div>
        )
    }
}

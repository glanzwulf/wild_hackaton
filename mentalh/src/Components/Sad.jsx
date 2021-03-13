import React, { Component } from 'react'
import './Moodtext.css';
import Header from './Header';
import Moodtextul from './Moodtextul';
import ActivityList from './ActivityList';


export default class Sad extends Component {
    constructor(){
        super();
        this.state={
            name:"react"
        };
    }
    
    render() {
        return (
            <div className="sad">
                 <Header />
                <Moodtextul />
            <h2>Sorry to hear that, Your response has been recorded.</h2>
            <p> you know, we've all been there and sometimes there are days like that</p>
            <p>However, we also have something that can help you cheer up 👍</p>
            <ActivityList />
            
        </div>
        )
    }
}

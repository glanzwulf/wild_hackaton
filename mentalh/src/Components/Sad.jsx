import React, { Component } from 'react'
import './Moodtext.css';

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
            <h2>Sorry to hear that.Your response has been recorded.</h2>
            <p> you know, we've all been there and sometimes there are days like that</p>
            <p>However, we also have something that can help you cheer up 👍</p>
            
        </div>
        )
    }
}

import './Moodtext.css';
import React, { Component } from 'react';
import Header from './Header';
import Moodtextul from './Moodtextul';
import ActivityList from './ActivityList';

export default class Happy extends Component {
    constructor(){
        super();
        this.state={
            name:"react"
        };
    }
    render() {
        return (

            <div className="happy">
               
                <Header />
                <Moodtextul />
            <h2>Thank you,Your response has been recorded.</h2>
            <p>Since you are in a good mood,how about we help you keep it that way?</p>
            <p>Here are some activities that will keep you happy 👍</p>
            <ActivityList />
        </div>
        )
    }
}

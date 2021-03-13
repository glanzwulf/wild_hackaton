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
            <h2>Thank you,Your response has been recorded.</h2>
            <p>Since you are in less good mood,how about we help you to make you more happy.</p>
            <p>Here are some activities that will make you more happy 👍</p>
            <ActivityList />
        </div>
        )
    }
}

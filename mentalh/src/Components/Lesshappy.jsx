
import React, { Component } from 'react'

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
            <h2>Thank you,Your response has been recorded.</h2>
            <p>Since you are in less good mood,how about we help you to make you more happy.</p>
            <p>Here are some activities that will make you more happy 👍</p>
        </div>
        )
    }
}

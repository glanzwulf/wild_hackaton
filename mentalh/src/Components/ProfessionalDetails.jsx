import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Professional.css';

const ProfessionalDetails = (props) => {
    const doctorID = props.match.params.id
    const [doctor, setDoctor] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [userName, setUserName] = useState("")
    const [headingText, setHeading] = useState("");
    const [headingDate, setDate] = useState("");
    const [headingTime, setTime] = useState("");

    function handleChangeUser(event) {
        setUserName(event.target.value);
    }
    function handleChangeDate(event){
        setDate(event.target.value)
    }
    function handleChangeTime(event){
        setTime(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault();
        setHeading(userName)
        setDate(headingDate)
        setTime(headingTime)
        setShowForm(!showForm)
        alert(`Thank you for your appointment ${userName}! We are waiting for you in ${headingDate} and ${headingTime} hours.`)
    }

    useEffect(() => {
        axios
            .get(`https://a.nacapi.com/Emu-IndianRed/${doctorID}`)
            .then((res) => {
                setDoctor(res.data);
            })
    }, [doctorID]);

    console.log(doctor)

    return (
        <div className="doctor-container">
            <div className="doctor-image-container">
                <img src={doctor.image} alt={doctor.title} />
            </div>
            <div className="doctor-details">
                <h1>Name</h1>
                <p>{doctor.name}</p>
                <h1>Description</h1>
                <p>{doctor.description}</p>
                <h1>Qualifications</h1>
                <p>{doctor.qualification}</p>
            </div>


            <div className="doctorbooking">
                <button className="bookingbtn" onClick={() => setShowForm(!showForm)}>Schedule an appointment</button>
                {showForm && (
                    <form className='bookingform' onSubmit={handleSubmit}>
                        <label>
                            Name:
                        <input type="text" onChange={handleChangeUser} />
                        Description:
                        <input className='inputdescription' type="textarea" />
                        Date:
                        <input type="date" onChange={handleChangeDate} />
                        Time:
                        <input type="time" onChange={handleChangeTime} />
                        </label>
                        <button className="finalSubmit">Submit</button>

                    </form>

                )}
            </div>

        </div>
    )
}

export default ProfessionalDetails;
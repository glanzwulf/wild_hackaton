import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Professional.css';

const ProfessionalDetails = (props) => {
    const doctorID = props.match.params.id
    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        axios
        .get(`https://a.nacapi.com/Emu-IndianRed/${doctorID}`)
        .then((res) => {
            setDoctor(res.data);
        })
    }, [doctorID]);

    console.log(doctor)

        return (
                <div>
                <div className="doctor-image-container">
                    <img src={doctor.image} alt={doctor.title}/> 
                </div>
                <div className="doctor-details">
                    <h1>Name</h1>
                    <p>{doctor.name}</p>
                    <h1>Description</h1>
                    <p>{doctor.description}</p>
                    <h1>Qualifications</h1>
                    <p>{doctor.qualification}</p>
                </div>
                </div>
        )
    }

export default ProfessionalDetails;
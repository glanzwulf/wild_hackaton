import React from 'react';
import { Link } from 'react-router-dom';
import './Professional.css';

const ProfessionalCard = (props) => {
    const { doctor } = props

    return (
        <Link to={{ pathname: `/professionals/${doctor.id}`}}>
            <div className="doctor-container1">
                <div className="image-box"><img src={doctor.image} alt={doctor.name}/></div>
                <div className="text-container">
                    <h3>{doctor.name}</h3>
                    <h4>{doctor.title}</h4>
                    <label>Rating: {doctor.rating}</label>
                </div>
            </div>
        </Link>
    );
}

export default ProfessionalCard;
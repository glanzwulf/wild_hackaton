import ProfessionalCard from './ProfessionalCard'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Professional.css';
import LoadingSpinner from "./LoadingSpinner";

const ProfessionalList = () => {
    const [isFiltered, setIsFiltered] = useState(false);
    const [doctor, setDoctor] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios
        .get(`https://a.nacapi.com/Emu-IndianRed/`)
        .then((res) => {
            setDoctor(res.data); 
            setLoading(true);           
        })
        
    });   

        return (
            <div>{loading ? (
        <section className="ProfessionalList">
            <div className="filterclass">
                <button className="filter-doctors" onClick={() => setIsFiltered(!isFiltered)}>
                    {isFiltered ? 'Filter by all Doctors' : 'Filter by best Doctors'}
                </button>
            </div>
            <div id="main1">
                {!isFiltered
                ? doctor.map((doctor) => (
                    <div key={doctor.id}>
                    <ProfessionalCard doctor={doctor} />
                    </div>
                ))
                : doctor
                    .filter((doctor) => doctor.rating >= 4.1)
                    .map((doctor) => (
                    <div key={doctor.id}>
                        <ProfessionalCard doctor={doctor} />
                    </div>
                    ))}
            </div>
            </section>
            ) : (
        <LoadingSpinner />
        )}
        </div>
    );
};

export default ProfessionalList;
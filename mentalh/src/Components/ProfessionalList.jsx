import ProfessionalCard from './ProfessionalCard'
import React, { useState, useEffect } from 'react';
import Navbar from './Header'
import axios from 'axios'
import './Professional.css';

const ProfessionalList = () => {
    const [isFiltered, setIsFiltered] = useState(false);
    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        axios
        .get(`https://a.nacapi.com/Emu-IndianRed/`)
        .then((res) => {
            setDoctor(res.data);
        })
    });

    console.log(doctor)

        return (
        <section className="ProfessionalList">
            <Navbar />
            <div className="filterclass">
                <button className="filter-doctors" onClick={() => setIsFiltered(!isFiltered)}>
                    {isFiltered ? 'All Doctors' : 'Best Doctors'}
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
    );
};

export default ProfessionalList;
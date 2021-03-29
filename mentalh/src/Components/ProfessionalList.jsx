import ProfessionalCard from './ProfessionalCard'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Professional.css';
import UseFullPageLoader from './UseFullPageLoader'

const ProfessionalList = () => {
    const [isFiltered, setIsFiltered] = useState(false);
    const [doctor, setDoctor] = useState([]);
    const [loader, showLoader, hideLoader] = UseFullPageLoader()

    useEffect(() => {
        showLoader();
        axios
        .get(`https://a.nacapi.com/Emu-IndianRed/`)
        .then((res) => {
            hideLoader();
            setDoctor(res.data);            
        })
    });   

        return (
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
            {loader}
        </section>
    );
};

export default ProfessionalList;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './packages.css';

const Packages = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="container my-5">
            <div className="border-start border-5 border-dark my-4">
                <h1 className=" ms-3 abt-title">Choose The <span className="title-bold-text">Destination <br />
                    Just Right</span> For Your <br /> Vacation</h1>

            </div>
            <small className="text-muted">All the places are amazing.! We Provide the best quality of Tour Trip. Definitely, <br /> You will be pleased with our services. Just Drop a call for any package Booking. <br /> Feel Free to have a trip with TourMania group.<br />
            </small>
            <div className="row">
                {
                    services.map(service =>
                        <div className="col-12 col-md-4 g-4">
                            <div className="card h-100 card-container">

                                <img src={service.img} alt="services img" className="card-img img-fluid" />

                                <div className="card-body">
                                    <h3 className="card-title fw-bold">{service.name}</h3>
                                    <span className="card-text">

                                        <p><i class="far fa-clock"></i> {service.days} Days</p>
                                        <p>Total Cost : {service.cost}$</p>
                                        <b> <i class="fas fa-map-marker-alt"></i> {service.location}</b>
                                    </span>
                                    <br />
                                    <Link to='/booking' className="text-decoration-none">
                                        <button className="border-0 d-flex mx-auto  btn-dark text-warning rounded-2 px-3 py-1 enroll-btn">Book Package</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Packages;
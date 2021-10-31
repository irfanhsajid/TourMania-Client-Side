import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './packages.css';

const Packages = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://damp-cove-38892.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className=" container-fluid my-5">

            <div className="container">
                <div className="border-start border-4 border-dark my-4">
                    <h2 className=" ms-3 abt-title">Trending, <span className="title-bold-text">Best Selling <br />
                        Tours And</span> Fun <br /> Destinations</h2>

                </div>
                <small className="text-muted">All the places are amazing.! We Provide the best quality of Tour Trip. Definitely, <br /> You will be pleased with our services. Just Drop a call for any package Booking. <br /> Feel Free to have a trip with TourMania group.<br />
                </small>
            </div>
            <div className="row g-3 mt-2">
                {
                    services.map(service =>
                        <div className="col-12 col-md-4  ">
                            <Link to="/booking" className="text-decoration-none">
                                <div className="card h-100 card-container shadow-lg">

                                    <div className="img-container">
                                        <img src={service.img} alt="services img" className="card-img img-fluid" />
                                    </div>

                                    <div className="card-body">
                                        <h3 className="card-title fw-bold text-dark">{service.name}</h3>
                                        <div className="card-text">
                                            <p><i class="far fa-clock"></i> {service.days} Days &nbsp; &nbsp; <i class="fas fa-user"></i> {service.person}+</p>
                                            <b className="text-dark">Total Cost : {service.cost}$</b>  &nbsp; &nbsp;
                                            <b> <i class="fas fa-map-marker-alt"></i> {service.location}</b>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Packages;
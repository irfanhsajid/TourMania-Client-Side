import React from 'react';
import img1 from './images/img-1.png';
import img2 from './images/img-2.png';
import img3 from './images/img-3.png';
import school from './images/school.png';
import college from './images/college.png';
import university from './images/university.png';

import './places.css';

const Places = () => {
    return (
        <div className="my-5">
            <div className="container">
                <div className="border-start border-4 border-dark my-4">
                    <h2 className=" ms-3 abt-title"><span className="title-bold-text">Amazing</span> Events And Fun <br /> Adventures <span className="title-bold-text">Waiting For <br /> You</span></h2>
                </div>
                <small className="text-muted">All the events are amazing.! We Provide the best quality of Event packages. Definitely, <br /> You will be pleased with our services. Just Drop a call for any package Booking. <br /> Feel Free to have a event with CholoFiriAbar.<br />
                </small>
            </div>
            <div className="places-container w-100">
                <div className="row g-0 mt-4 mb-5 justify-content-center">
                    <div className="col-md-4 col-12 place-card">
                        <div>
                            <img src={school} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-4 col-12 place-card">
                        <div>
                            <img src={img1} alt="" className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-md-4 col-12 place-card">
                        <div className="mt-3 ms-3 p-3">
                            <p>Best Reunion <span className="fs-4 fw-bold">Experience</span> <br />
                                <i className="text-danger ">Been reunited recently?</i> </p>
                            <p className="text-muted"> This is one of the Most amazing platform exists on this country. Book a package  and go for unlimited fun. cheers!</p>
                            <p>learn more <i className="fas fa-arrow-right"></i></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 place-card">
                        <div>
                            <img src={img2} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-4 col-12 place-card">
                        <div className="mt-3 ms-3 p-3">
                            <p>Best Reunion <span className="fs-4 fw-bold">Experience</span> <br />
                                <i className="text-danger ">Been reunited recently?</i> </p>
                            <p className="text-muted"> This is one of the Most amazing platform exists on this country. Book a package  and go for unlimited fun. cheers!</p>
                            <p>learn more <i className="fas fa-arrow-right"></i></p>
                        </div>
                    </div>

                    <div className="col-md-4 col-12 place-card">
                        <div>
                            <img src={college} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-4 col-12 place-card">
                        <div className="mt-3 ms-3 p-3">
                            <p>Best Reunion <span className="fs-4 fw-bold">Experience</span> <br />
                                <i className="text-danger ">Been reunited recently?</i> </p>
                            <p className="text-muted"> This is one of the Most amazing platform exists on this country. Book a package  and go for unlimited fun. cheers!</p>
                            <p>learn more <i className="fas fa-arrow-right"></i></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 place-card">
                        <div>
                            <img src={university} alt="" className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-md-4 col-12 place-card">
                        <div>
                            <img src={img3} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Places;
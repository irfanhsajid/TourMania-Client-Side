import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <h4>About Us</h4>
                        <p className="border-bottom w-50"></p>
                        <p className="text-muted">We the TourManiya people offer the best quality of services having top most professional experiences. You'll feel awesome with us In Sha Allah</p>
                        <div>
                            <p className="fw-lighter"> <i className="fas fa-phone-alt me-3 yellow-text"></i> 1-677-124-44227</p>
                            <p className="fw-lighter"><i className="fas fa-map-marker-alt me-3 yellow-text"></i> 184 Main Collins Street</p>
                            <p className="fw-lighter"><i className="fas fa-envelope me-3 yellow-text"></i> info@TourMania.com</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <h4>Latest Posts</h4>
                        <p className="border-bottom w-50"></p>

                        <div>
                            <span className="fw-lighter yellow-text">August 30, 2017</span>
                            <p className="fw-light text-sm-start">How To Take Better Photos?</p>
                        </div>
                        <div>
                            <span className="fw-lighter yellow-text">January 30, 2020</span>
                            <p className="fw-light text-sm-start">14 Things To See And Do When Visiting Kyoto</p>
                        </div>
                        <div>
                            <span className="fw-lighter yellow-text">September 30, 2021</span>
                            <p className="fw-light text-sm-start">Backpacking Laos: A Full Travel Guide for You</p>
                        </div>
                        <div>
                            <span className="fw-lighter yellow-text">December 30, 2021</span>
                            <p className="fw-light text-sm-start">Kashmir: The Heavenly Place.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <h4>Latest Tweets</h4>
                        <p className="border-bottom w-50"></p>

                        <div>
                            <p className="fw-lighter text-muted"><i className="fab fa-twitter me-2 yellow-text"></i> @alexherder hi @alexherder, we can’t recommend anyone specific, but you can find a list of freelenacers working wit… https://t.co/fs1gMcMOej </p>

                        </div>
                        <div>
                            <p className="fw-lighter text-muted"><i className="fab fa-twitter me-2 yellow-text"></i> @simonrichwright Here’s an article to get you started with using our support platform: https://t.co/eiUoQNlHUh Let… https://t.co/PhSMKT4Rph </p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
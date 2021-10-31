import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Faq.css';
import image from './faq.png'
const Faq = () => {
    return (
        <div className="container-fluid my-5 faq">
            <h2 className="text-center fw-bold">Frequently Asked Questions On COVID-19</h2>
            <p className="w-75 my-3 d-flex mx-auto border-3 border-bottom"></p>
            <div className="faq-container">
                <div className="accrodion">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Can People who have recently recovered from COVID-19 travel?</Accordion.Header>
                            <Accordion.Body className="text-muted fw-lighter">
                                Yes, people who have recovered from COVID-19 can safely travel if they tested positive for COVID-19 in the past 90 days and have met criteria to end isolation.

                                People can continue to test positive for up to 90 days after a COVID-19 diagnosis without being infectious to others. For this reason, travelers who have recovered from COVID-19 in the past 90 days do not need to get tested before or after travel.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How can I protect myself from COVID-19 when using differnt types of transport?</Accordion.Header>
                            <Accordion.Body className="text-muted fw-lighter">
                                Protect yourself from COVID-19 by getting fully vaccinated and by wearing a mask on public transportation. Wearing a mask over your nose and mouth is required on in indoor areas of planes, buses, trains, and other forms of public transportation traveling into, within, or out of the United States, and while indoors at U.S. transportation hubs (such as airports and stations), even for those people who have been fully vaccinated.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What happens if there is a sick passenger on an international fight?</Accordion.Header>
                            <Accordion.Body className="text-muted fw-lighter">
                                Under current federal regulations, pilots must report all illnesses and deaths to CDC before arriving to a U.S. destination. According to CDC protocols, if a sick traveler has a contagious disease that is a risk to others on board the airplane, CDC works with local and state health departments and international public health agencies to contact exposed passengers and crew.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Can travelling on a cruise increase my risk of getting COVID-19?</Accordion.Header>
                            <Accordion.Body className="text-muted fw-lighter">
                                Yes. The chance of getting COVID-19 on cruise ships is high because the virus spreads easily between people in close quarters aboard ships. For this reason, CDC recommends the following groups of people avoid traveling on cruise ships, including river cruises, worldwide:

                                People who are not fully vaccinated.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="faq-img">
                    <img src={image} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;
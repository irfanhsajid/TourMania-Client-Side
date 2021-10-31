import React from 'react';
import { Carousel } from 'react-bootstrap';
import './banner.css';
import banner1 from './images/women.jpg';
import banner2 from './images/slider3.jpg';
import banner3 from './images/slider1.jpg';

const Banner = () => {
    return (
        <div className="">

            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <p>Maldives, officially the Republic of Maldives, is an archipelagic state in the Indian subcontinent of Asia, situated in the Indian Ocean. It lies southwest of Sri Lanka and India.</p>
                        <button className="btn-warning px-5 py-2 border-0 rounded-2">Visit More</button> <br />
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>Sylhet is a city in eastern Bangladesh, on the Surma River. It’s known for its Sufi shrines, like the ornate tomb and mosque of 14th-century saint Hazrat Shah Jalal.</p>
                        <button className="btn-warning px-5 py-2 border-0 rounded-2">Visit More</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;
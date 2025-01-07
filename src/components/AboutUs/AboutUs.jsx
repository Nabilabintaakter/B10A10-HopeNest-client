import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';
import Container from '../Container/Container';

const AboutUs = () => {
    return (
        <Container>
            <section className="py-8 md:py-16">
                <div className="text-center">
                    <Zoom triggerOnce duration={2000}>
                        <div className="flex justify-center items-center mb-12 md:mb-14">
                            <div className="text-center">
                                <h1 className="font-semibold text-[#374151] dark:text-white text-3xl md:text-4xl mb-2 md:mb-4">About Us</h1>
                                <p className="text-sm md:text-base font-sans text-[#1B1A1AB3] dark:text-gray-300 w-full md:w-[70%] mx-auto">We are a team of passionate professionals, committed to delivering high-quality services and innovative solutions for every client. Our approach is driven by collaboration, creativity, and excellence in all we do.</p>
                            </div>
                        </div>
                    </Zoom>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12">

                        {/* Mission Section with Animation */}
                        <Fade direction="up" cascade triggerOnce>
                            <div className="w-full md:w-80 h-56 bg-blue-200 shadow-2xl rounded-lg p-3 transform transition duration-500 hover:scale-105 flex flex-col justify-center items-center">
                                <div className="text-4xl text-blue-500 mb-4">
                                    <FaRocket />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                                <p className="text-gray-600">
                                    To lead through innovation and dedication, making a lasting impact with every project we undertake.
                                </p>
                            </div>
                        </Fade>

                        {/* Vision Section with Animation */}
                        <Fade direction="up" cascade triggerOnce delay={200}>
                            <div className="w-full md:w-80 h-56 bg-green-200 shadow-2xl rounded-lg p-6 transform transition duration-500 hover:scale-105 flex flex-col justify-center items-center">
                                <div className="text-4xl text-green-500 mb-4">
                                    <FaUsers />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                                <p className="text-gray-600">
                                    To create a community where every client feels valued, and we build sustainable relationships that last.
                                </p>
                            </div>
                        </Fade>

                        {/* Values Section with Animation */}
                        <Fade direction="up" cascade triggerOnce delay={400}>
                            <div className="w-full md:w-80 h-56 bg-yellow-200 shadow-2xl rounded-lg p-6 transform transition duration-500 hover:scale-105 flex flex-col justify-center items-center">
                                <div className="text-4xl text-yellow-500 mb-4">
                                    <FaLightbulb />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
                                <p className="text-gray-600">
                                    Integrity, accountability, and excellence are at the core of our operations, ensuring top-tier service with every interaction.
                                </p>
                            </div>
                        </Fade>

                    </div>
                </div>
            </section>
        </Container>
    );
};

export default AboutUs;

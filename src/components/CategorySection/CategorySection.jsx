import React from 'react';
import Container from '../Container/Container';
import { FaRocket, FaBriefcase, FaHeart, FaUser, FaGraduationCap, FaHospital } from 'react-icons/fa';
import { Fade, Zoom } from 'react-awesome-reveal';

const CategorySection = () => {
    const categories = [
        { name: 'Startup', description: 'Innovative projects ready to launch.', color: 'bg-blue-500', icon: <FaRocket size={40} /> },
        { name: 'Business', description: 'Empowering businesses to grow.', color: 'bg-green-500', icon: <FaBriefcase size={40} /> },
        { name: 'Charity', description: 'Helping communities and individuals in need.', color: 'bg-red-500', icon: <FaHeart size={40} /> },
        { name: 'Personal Issue', description: 'Support individuals facing challenges.', color: 'bg-yellow-500', icon: <FaUser size={40} /> },
        { name: 'Education', description: 'Funding educational initiatives and scholarships.', color: 'bg-purple-500', icon: <FaGraduationCap size={40} /> },
        { name: 'Health', description: 'Improving health and wellness globally.', color: 'bg-teal-500', icon: <FaHospital size={40} /> },
    ];

    return (
        <Container>
            <div className=" pt-5 pb-12 md:pb-16 font-sans">
                {/* Section Header */}
                <Zoom triggerOnce duration={2000}>
                    <div className="flex justify-center items-center mb-12 md:mb-14">
                        <div className="text-center">
                            <h1 className="font-semibold text-[#374151] dark:text-white text-3xl md:text-4xl mb-2 md:mb-4">Explore by Category</h1>
                            <p className="text-sm md:text-base font-sans text-[#1B1A1AB3] dark:text-gray-300 w-full md:w-[70%] mx-auto">Browse through various categories and support the causes that matter to you.</p>
                        </div>
                    </div>
                </Zoom>
                {/* Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {categories.map((category, index) => (
                        <Fade
                            key={index}
                            direction="up"
                            triggerOnce
                            delay={index * 200} // Delay for sequential animation
                        >
                            <div
                                className={`relative group p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ${category.color} text-white h-44 flex flex-col justify-between items-start`}
                            >
                                {/* Icon */}
                                <div className="text-white bg-opacity-20 rounded-full mb-2">
                                    {category.icon}
                                </div>
                                {/* Decorative Circle */}
                                <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white dark:bg-black opacity-20 group-hover:scale-125 transform transition-transform duration-500"></div>

                                {/* Content */}
                                <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                                <p className="text-sm md:text-base">{category.description}</p>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg"></div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default CategorySection;

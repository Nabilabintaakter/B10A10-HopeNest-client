import React from 'react';

const CallToActionSection = () => {
    return (
        <section className="font-sans relative bg-cover bg-center py-20 text-white text-center" style={{ backgroundImage: 'url(https://i.ibb.co/rmCfwR8/15.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-70"></div> {/* Increased opacity */}
            <div className="relative z-10 px-4 md:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Make a Difference: Support Global Change
                </h2>
                <p className="text-lg mb-6 max-w-xl mx-auto opacity-90">
                    Join us in creating a sustainable impact worldwide. Your contribution can help uplift communities in need and bring about positive change.
                </p>
                <div className="flex justify-center gap-4 mb-8">
                    <button className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-md hover:bg-yellow-600 transition-colors">
                        Donate Now
                    </button>
                    <button className="bg-white text-orange-600 font-bold py-2 px-6 rounded-md border-2 border-white hover:bg-orange-50 transition-colors">
                        Become a Volunteer
                    </button>
                </div>
                <div className="mt-12">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">Stay Updated with Our Impact</h3>
                    <p className="text-md mb-6 max-w-xl mx-auto opacity-80">
                        Subscribe to our newsletter to get the latest updates on projects and initiatives across the world.
                    </p>
                    <div className="flex justify-center items-center space-x-4">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="pl-4 py-[14px] w-80 rounded-md border-2 border-white bg-transparent text-white placeholder-white focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                        />
                        <button className="bg-yellow-500 text-white font-semibold py-4 px-8 rounded-md hover:bg-yellow-600 transition-all transform hover:scale-105">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;
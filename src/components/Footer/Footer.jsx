import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 font-sans">
            <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Left Section - Logo & Description */}
                <div>
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="HopeNest Logo" className="bg-white rounded-tl-lg rounded-br-lg p-3 w-64 mb-2" />
                    </div>
                    <p className="text-sm mt-2">Empowering dreams with your generous support. Together, we can make a difference.</p>

                    {/* Social Icons */}
                    <div className="mt-4 flex space-x-4">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:w-12 hover:h-12 transition-all duration-300"
                        >
                            <FaFacebookF size={18} />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 bg-pink-500 text-white rounded-full hover:w-12 hover:h-12 transition-all duration-300"
                        >
                            <FaInstagram size={18} />
                        </a>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-full hover:w-12 hover:h-12 transition-all duration-300"
                        >
                            <FaTwitter size={18} />
                        </a>
                        <a
                            href="https://www.pinterest.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:w-12 hover:h-12 transition-all duration-300"
                        >
                            <FaPinterest size={18} />
                        </a>
                    </div>
                </div>

                {/* Middle Section - Services */}
                <div>
                    <h4 className="font-semibold text-lg">Services</h4>
                    <ul className="mt-2">
                        <li><a href="#" className="hover:text-blue-500">Incident Responder</a></li>
                        <li><a href="#" className="hover:text-blue-500">Secure Managed Fund</a></li>
                        <li><a href="#" className="hover:text-blue-500">Clean Water for All</a></li>
                        <li><a href="#" className="hover:text-blue-500">Give Education</a></li>
                    </ul>
                </div>

                {/* Right Section - Links */}
                <div>
                    <h4 className="font-semibold text-lg">Links</h4>
                    <ul className="mt-2">
                        <li><a href="#" className="hover:text-blue-500">Food for Individuals</a></li>
                        <li><a href="#" className="hover:text-blue-500">Temporary Housing</a></li>
                        <li><a href="#" className="hover:text-blue-500">Local Shelters</a></li>
                        <li><a href="#" className="hover:text-blue-500">Natural Disasters</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h4 className="font-semibold text-lg">Contact Info</h4>
                    <ul className="mt-2">
                        <li>📞 +088 (246) 642-27-10</li>
                        <li>📧 <a href="mailto:example@mail.com" className="hover:text-blue-500">hopenest@mail.com</a></li>
                        <li>📍 15/1 Dhanmondi, Dhaka 1205, Bangladesh</li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-sm mt-8">
                <p>Copyright 2024 by HopeNest. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

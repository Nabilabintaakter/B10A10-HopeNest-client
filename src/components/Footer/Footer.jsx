import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import logo from '../../assets/logo.png';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Footer = () => {
    const {dark} = useContext(AuthContext);
    return (
        <footer className="bg-gray-800 dark:bg-gray-200 dark:text-gray-700 text-white pt-12 pb-2 font-sans">
            <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Left Section - Logo & Description */}
                <div>
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="HopeNest Logo" className="bg-white rounded-tl-2xl rounded-br-2xl p-3 w-64 mb-2" />
                    </div>
                    <p className="text-sm mt-2">Empowering dreams with your generous support. Together, we can make a difference.</p>

                    {/* Social Icons */}
                    <div className="mt-4 flex space-x-4">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full hover:w-9 hover:h-9 transition-all duration-300"
                        >
                            <FaFacebookF size={18} />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            className="flex items-center justify-center w-8 h-8 bg-pink-500 text-white rounded-full hover:w-9 hover:h-9 transition-all duration-300"
                        >
                            <FaInstagram size={18} />
                        </a>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            className="flex items-center justify-center w-8 h-8 bg-blue-400 text-white rounded-full hover:w-9 hover:h-9 transition-all duration-300"
                        >
                            <FaTwitter size={18} />
                        </a>
                        <a
                            href="https://www.pinterest.com"
                            target="_blank"
                            className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full hover:w-9 hover:h-9 transition-all duration-300"
                        >
                            <FaPinterest size={18} />
                        </a>
                    </div>
                </div>

                {/* Middle Section - Services */}
                <div>
                    <h4 className="font-semibold text-lg text-gray-400">Services</h4>
                    <ul className="mt-2 ">
                        <li><a href="#" className="hover:text-blue-500">Customer Support</a></li>
                        <li><a href="#" className="hover:text-blue-500">Donation Tracking</a></li>
                        <li><a href="#" className="hover:text-blue-500">Secure Payments</a></li>
                        <li><a href="#" className="hover:text-blue-500">Community Impact</a></li>
                    </ul>
                </div>

                {/* Right Section - Links */}
                <div>
                    <h4 className="font-semibold text-lg text-gray-400">Links</h4>
                    <ul className="mt-2">
                        <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-500">Donate Now</a></li>
                        <li><a href="#" className="hover:text-blue-500">FAQs</a></li>
                        <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h4 className="font-semibold text-lg text-gray-400">Contact Info</h4>
                    <ul className="mt-2">
                        <li>📞 +088 (246) 642-27-10</li>
                        <li>📧 <a href="mailto:example@mail.com" className="hover:text-blue-500">hopenest@mail.com</a></li>
                        <li>📍 15/1 Dhanmondi, Dhaka 1205, Bangladesh</li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-sm mt-8 mb-3">
                <p>Copyright 2024 by HopeNest. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

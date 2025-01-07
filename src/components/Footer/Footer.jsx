import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import logo from '../../assets/logo.png';
import Container from "../Container/Container";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 dark:bg-gray-200 dark:text-gray-700 text-white pt-12 pb-2 font-sans">
            <Container>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

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


                    {/* Right Section - Links */}
                    <div>
                        <h4 className="font-semibold text-lg text-gray-400">Links</h4>
                        <ul className="mt-2">
                            <li className="hover:text-blue-500"><Link to='/aboutUs'>About Us</Link></li>
                            <li className="hover:text-blue-500"><Link to='/campaigns'>Donate Now</Link></li>
                            <li className="hover:text-blue-500"><Link to='/campaigns'>Donation Tracking</Link></li>
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
            </Container>

            {/* Footer Bottom */}
            <div className="text-center text-sm mt-8 mb-3">
                <p>Copyright 2024 by HopeNest. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

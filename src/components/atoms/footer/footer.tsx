import React from 'react';
import Logo from '../logos/berando';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="mb-6 md:mb-0">
                    <div className="mb-8">
                        <Logo />
                    </div>
                    <p className="mt-2 w-full hanken-grotesk-legendary-400">
                        We Specialize In Custom Software Development, Delivering Tailored Products, IT Services, And Comprehensive End-To-End Solutions For Our Enterprise Clients.
                    </p>
                    <div className="flex mt-4 space-x-4">
                        <a href="#" className="text-blue-500"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-blue-400"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-pink-500"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-red-500"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div className="mb-6 md:mb-0 flex flex-col items-center lg:col-span-2">
                    <h2 className="text-xl font-semibold mb-8 hanken-grotesk-legendary-400">Quick Links</h2>
                    <ul className="mt-2 space-y-2 text-center md:text-left">
                        <li><a href="#" className="hover:underline hanken-grotesk-legendary-400">About us</a></li>
                        <li><a href="#" className="hover:underline hanken-grotesk-legendary-400">Services</a></li>
                        <li><a href="#" className="hover:underline hanken-grotesk-legendary-400">Testimonials</a></li>
                        <li><a href="#" className="hover:underline hanken-grotesk-legendary-400">Contact Us</a></li>
                    </ul>
                </div>
                <div className='flex justify-center md:justify-end'>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold mb-8 hanken-grotesk-legendary-400">Contact Us</h2>
                        <p className="mt-2">
                            <a href="mailto:uberando2015@gmail.com" className="hover:underline hanken-grotesk-legendary-400">uberando2015@gmail.com</a>
                        </p>
                        <p className="mt-2 hanken-grotesk-legendary-400">
                            Nouka Village, Jl. Gandrung Blok A no.3, Jambudipa, Kec. Cisarua, Kabupaten Bandung Barat, Jawa Barat 40551
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 border-t border-gray-700 pt-4 hanken-grotesk-legendary-400">
                <p>© {new Date().getFullYear()} All rights reserved. Uberando</p>
            </div>
        </footer>
    );
};

export default Footer;

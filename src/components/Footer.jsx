
import React from 'react';
import { FaFacebook, FaInstagram, FaLocationArrow, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { PiPhone } from 'react-icons/pi';

const Footer = () => {
    return (
        <div className='h-auto md:h-88 bg-green-700 text-white'>
            <div className='container mx-auto justify-items-center grid grid-cols-2 md:grid-cols-4 h-[80%] '>

                <div className='mt-15'>
                    <h1 className='font-semibold text-xl mb-2'>QurbaniHat</h1>
                    <p className='text-gray-300'>About us</p>
                    <p className='text-gray-300'>Our farms</p>
                    <p className='text-gray-300'>Blog</p>
                    <p className='text-gray-300'>Careers</p>
                </div>

                <div className='mt-15'>
                    <h1 className='font-semibold text-xl mb-2'>Animals</h1>
                    <p className='text-gray-300'>Cows & Bulls</p>
                    <p className='text-gray-300'>Goats</p>
                    <p className='text-gray-300'>Sheep</p>
                    <p className='text-gray-300'>Camel</p>
                </div>

                <div className='mt-15'>
                    <h1 className='font-semibold text-xl mb-2'>Contact Us</h1>
                    <p className='text-gray-300 text-[10px] md:text-[14px] flex gap-2 items-center'> <PiPhone></PiPhone> +880 1700-000000</p>
                    <p className='text-gray-300 text-[10px] md:text-[14px] flex gap-2 items-center'><MdEmail></MdEmail>hello@qurbanihat.com</p>
                    <p className='text-gray-300 text-[10px] md:text-[14px] flex gap-2 items-center'><FaLocationArrow/> Chattogram,Bangladesh</p>
                </div>

                <div className='mt-15'>
                    <h1 className='font-semibold text-xl mb-2'>Help</h1>
                    <p className='text-gray-300'>FAQ</p>
                    <p className='text-gray-300'>Booking guide</p>
                    <p className='text-gray-300'>Refund policy</p>
                    <p className='text-gray-300'>Terms</p>
                </div>


            </div>
            <hr className=' w-[90%] opacity-40  mx-auto mb-2'></hr>
            <div className='flex flex-col md:flex-row gap-2 md:gap-20 md:items-center lg:justify-between container  lg:mx-auto items-center mt-6'>
                <h1 className='text-gray-300'>© 2026 QurbaniHat. All rights reserved.</h1>
                <div className='flex gap-3 text-[16px] lg:text-xl text-gray-300 mb-2'>
                    <FaFacebook/>
                    <FaXTwitter/>
                    <FaInstagram/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
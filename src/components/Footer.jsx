import { LocationArrow } from '@gravity-ui/icons';
import React from 'react';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { PiPhone } from 'react-icons/pi';

const Footer = () => {
    return (
        <div className='h-88 bg-green-700 text-white'>
            <div className='container mx-auto flex justify-between h-[80%] '>

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
                    <p className='text-gray-300 flex gap-2 items-center'> <PiPhone></PiPhone> +880 1700-000000</p>
                    <p className='text-gray-300 flex gap-2 items-center'><MdEmail></MdEmail>hello@qurbanihat.com</p>
                    <p className='text-gray-300 flex gap-2 items-center'><LocationArrow></LocationArrow>Chattogram,Bangladesh</p>
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
            <div className='flex justify-between container mx-auto items-center mt-6'>
                <h1 className='text-gray-300'>© 2026 QurbaniHat. All rights reserved.</h1>
                <div className='flex gap-3 text-xl text-gray-300'>
                    <FaFacebook/>
                    <FaXTwitter/>
                    <FaInstagram/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
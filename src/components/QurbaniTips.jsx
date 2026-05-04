import { Separator } from '@heroui/react';
import React from 'react';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import { FaHandshake, FaWeightScale } from 'react-icons/fa6';

const QurbaniTips = () => {
    return (


        
        <div className='container mx-auto my-10'>
            <Separator></Separator>
            <h1 className='text-3xl font-bold text-center md:text-left my-10'>Qurbani Tips</h1>
            <div className='  grid grid-cols-1 justify-items-center md:grid-cols-3 gap-10'>

                <div className='bg-amber-50 p-3 w-[90vw] md:w-auto  shadow border flex flex-col rounded-xl space-y-2'>
                    <FaCheckCircle className='text-xl'></FaCheckCircle>
                    <h1 className='text-xl font-bold'>Animal Health Check</h1>
                    <p>Ensure the animal is free from disease, has no visible injuries, and is of proper age for Qurbani.</p>
                </div>

                 <div className='bg-amber-50 p-3 w-[90vw] md:w-auto  shadow border flex flex-col rounded-xl space-y-2'>
                    <FaWeightScale className='text-xl' />
                    <h1 className='text-xl font-bold'>Weight Requirements</h1>
                    <p>Goats should be at least 1 year old. Cows must be at least 2 years old to qualify for Qurbani.</p>
                </div>

                 <div className='bg-amber-50 p-3 w-[90vw] md:w-auto shadow border flex flex-col rounded-xl space-y-2'>
                    <BsFillCalendarDateFill className='text-xl'></BsFillCalendarDateFill>
                    <h1 className='text-xl font-bold'>Book Early</h1>
                    <p>Slots fill fast near Eid. Book at least 2 weeks in advance to secure your preferred animal.</p>
                </div>

                 <div className='bg-amber-50 p-3 w-[90vw] md:w-auto shadow border flex flex-col rounded-xl space-y-2'>
                    <FaHandshake className='text-2xl'></FaHandshake>
                    <h1 className='text-xl font-bold'>Shared Sacrifice</h1>
                    <p>A cow can be shared among up to 7 persons. Our platform supports group bookings easily.</p>
                </div>
                

            </div>
        </div>
    );
};

export default QurbaniTips;
import AnimalBookingForm from '@/components/AnimalBookingForm';
import AnimalDetails from '@/components/AnimalDetails';
import { Button, Chip, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';

const AnimalDetailPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://b13-a8-beryl.vercel.app/data.json');
    const animals = await res.json();
    const animal = animals.find(a => a.id == id);
    return (
        <div className='container mx-auto mt-10 flex flex-col items-center'>
            <AnimalDetails animal={animal}></AnimalDetails>

            {/* Booking Form */}
            <div className='w-[80%] rounded-md flex flex-col items-center justify-center gap-10 mt-1 mb-10 bg-white shadow border p-10'>
                <div className='text-center'>
                    <h1 className='text-2xl font-semibold'>Book This Animal</h1>
                    <p>Fill in your details to reserve this animal for Qurbani</p>
                </div>
                <AnimalBookingForm></AnimalBookingForm>
            </div>

        </div>
    );
};

export default AnimalDetailPage;
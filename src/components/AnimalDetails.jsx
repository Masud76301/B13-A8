import { Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';

const AnimalDetails = ({ animal }) => {
    return (
        <div className='grid grid-cols-2 gap-8 '>
            <div className='relative w-full h-[80%] rounded-md aspect-square'>
                <Image
                    src={animal.image}
                    alt={animal.name}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    className="rounded-xl object-cover"
                />
            </div>

            <div className='space-y-5'>
                <h1 className='text-3xl font-bold'> {animal.name}</h1>
                <p className="text-2xl text-green-700 font-bold flex gap-1 items-center"><TbCurrencyTaka />{animal.price}</p>
                <div className='grid grid-cols-3 gap-3 text-center'>
                    <div className='bg-amber-100 p-3 rounded-2xl'>
                        <h1>Type</h1>
                        <p className='text-xl font-semibold'>{animal.type}</p>
                    </div>

                    <div className='bg-amber-100 p-3 rounded-2xl'>
                        <h1>Weight</h1>
                        <p className='text-xl font-semibold'>{animal.weight}</p>
                    </div>

                    <div className='bg-amber-100 p-3 rounded-2xl'>
                        <h1>Age</h1>
                        <p className='text-xl font-semibold'>{animal.age}</p>
                    </div>
                </div>
                <h1>{animal.description}</h1>


                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Chip size="lg" className='text-green-700 font-semibold bg-green-200'>{animal.breed}</Chip>
                    <Chip size="lg" className='text-green-700 font-semibold bg-green-200'>{animal.category}</Chip>
                    <Chip size="lg" className='text-green-700 font-semibold bg-green-200'>Vet Certified</Chip>
                </div>

                <div className='bg-green-50  p-4 rounded-xl text-green-700 flex gap-2'>
                    <h1><span className='font-semibold'>Farm</span> : Green Valley Farm, {animal.location}</h1>
                    <Separator orientation="vertical" className='bg-green-700' />
                    <p><span className='font-semibold'>Available</span> : Yes</p>
                </div>

            </div>
        </div>
    );
};

export default AnimalDetails;
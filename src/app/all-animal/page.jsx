
'use client'
import AnimalCard from '@/components/AnimalCard';
import Footer from '@/components/Footer';
import animals from "@/data/data.json";
import { useState } from 'react';





const AllAnimalPage = () => {
    const [sortOrder, setSortOrder] = useState("default");
    
    const sortAnimals = [...animals].sort((a,b)=>{
        if (sortOrder ==="Low-To-Hight"){
            return a.price-b.price;
        }
        if (sortOrder === "High-To-Low"){
            return b.price-a.price;
        }
    })

    return (
        <div>
            <div className='bg-[#EAF3DE]'>
                <div className='h-30 container mx-auto py-6 '>
                    <h1 className='text-2xl font-bold text-center md:text-left'>All Animal Page</h1>
                    <p className='text-center md:text-left'>Browse our complete inventory of certified Qurbani animals</p>
                </div>
            </div>



            <div className='py-10'>

                <select 
                value={sortOrder} 
                className="w-[30%] select select-neutral rounded-md h-6 outline  m-auto" onChange={(e) =>setSortOrder(e.target.value) } >
                    <option>default</option>
                    <option>Low-To-Hight</option>
                    <option>High-To-Low</option>

                </select>


            </div>

            <div className='grid  grid-cols-1 md:gris-cols-2 lg:grid-cols-4 gap-5 my-10 container mx-auto'>
                {sortAnimals.map(animal => <AnimalCard key={animal.id} animal={animal}></AnimalCard>)}
            </div>

            <Footer></Footer>

        </div>

    );
};

export default AllAnimalPage;
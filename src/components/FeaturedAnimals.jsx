import { ArrowRight } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";
import AnimalCard from "./AnimalCard";
import animals from "@/data/data.json";

const FeaturedAnimals = async () => {
    // const res = await fetch('http://localhost:3000/data.json');
    // const animals = await res.json();
    const FeaturedAnimals = animals.slice(0, 4);

    return (
        <div className="container mx-auto my-10">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Featured Animals</h1>
                    <p>Hand-picked healthy livestock for Qurbani</p>
                </div>
                <Link href="/all-animal"><Button size="sm" variant="outline" className='hover:bg-amber-50 rounded-md'>See All <ArrowRight /></Button></Link>
            </div>
            <div className="grid grid-cols-4 gap-3 my-10">

                {FeaturedAnimals.map(animal => <AnimalCard key={animal.id} animal={animal}></AnimalCard>)}
            </div>
        </div>
    );
};

export default FeaturedAnimals;
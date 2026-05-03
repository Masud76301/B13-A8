import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { LuDot } from "react-icons/lu";
import { TbCurrencyTaka } from "react-icons/tb";


const AnimalCard = ({ animal }) => {
    return (

        <Card className="rounded-xl border">
            <div className="relative w-full aspect-square">
                <Image src={animal.image}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill alt={animal.name} className="rounded-xl object-cover" />
                <Chip className="absolute right-5 top-2">{animal.category}</Chip>
            </div>

            <h1 className="text-xl text-green-600 font-semibold">{animal.name}</h1>
            <div className="flex gap- items-center">
                <h1 className="text-[12px]">{animal.weight} kg</h1>
                <LuDot />
                <h1 className="text-[12px]">{animal.age} years</h1>
            </div>
            <div>
                <h1 className="flex gap-1 items-center font-semibold"><TbCurrencyTaka />{animal.price}</h1>
            </div>
            <Link href={`/all-animal/${animal.id}`}><Button size="sm" variant='outline' className='hover:bg-amber-50 rounded-md w-full'>View Details</Button></Link>
        </Card>

    );
};

export default AnimalCard;
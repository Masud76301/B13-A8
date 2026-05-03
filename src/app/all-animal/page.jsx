
import AnimalCard from '@/components/AnimalCard';
import Footer from '@/components/Footer';





const AllAnimalPage = async() => {
    const res = await fetch('http://localhost:3000/data.json');
    const animals = await res.json();
   

    return (
        <div>
            <div className='bg-[#EAF3DE]'>
                <div className='h-30 container mx-auto py-6 '>
                    <h1 className='text-2xl font-bold'>All Animal Page</h1>
                    <p>Browse our complete inventory of certified Qurbani animals</p>
                </div>
            </div>



            <div className='py-10'>

                <select defaultValue="default" className="w-[30%] select select-neutral   rounded-md h-6 outline  m-auto onChange={handleFilter} ">
                    <option>default</option>
                    <option>Price- Low To Hight</option>
                    <option>Price -High To Low</option>

                </select>


            </div>

            <div className='grid grid-cols-4 gap-5 my-10 container mx-auto'>
                {animals.map(animal => <AnimalCard key={animal.id} animal={animal}></AnimalCard>)}
            </div>

            <Footer></Footer>

        </div>

    );
};

export default AllAnimalPage;
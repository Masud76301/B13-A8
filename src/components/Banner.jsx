import { Button } from '@heroui/react';
import Link from 'next/link';


const Banner = () => {
    return (
        <div className="container mx-auto h-140  mt-10 bg-linear-to-b from-green-950 to-green-600 flex flex-col items-center gap-4 text-center justify-center">

      <span className="bg-transparent text-[14px] font-semibold shadow-xl rounded-3xl border border-white mx-auto text-white px-4 py-2 mt-10 text-center">Eid ul-Adha 2026 — Bookings Open</span>

      <h1 className="text-6xl text-white font-bold">Premium Livestock for <br />
        <span className="text-amber-300">Qurbani</span></h1>
      <p className="text-white font-semibold text-center">Browse, book, and arrange pickup of certified healthy animals <br />from trusted local farms.</p>

      <div className="flex gap-2">
        <Link href='/all-animal'><Button variant="outline" className="hover:bg-amber-50 hover:text-black rounded-md text-white">Browse Animals</Button></Link>
        <Button variant="outline" className="hover:bg-amber-50 hover:text-black rounded-md text-white">Qurbani Tips</Button>
      </div>

      <div className="flex gap-10 mt-10 text-white text-center">
          <div>
            <h1 className="text-3xl font-bold text-amber-300">500+</h1>
            <p>Animals Listed</p>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-amber-300">48</h1>
            <p>Verified farms</p>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-amber-300">2,400+</h1>
            <p>Happy families</p>
          </div>
      </div>


    </div >
    );
};

export default Banner;
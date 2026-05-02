import Banner from "@/components/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import Footer from "@/components/Footer";
import { Button } from "@heroui/react";
import Link from "next/link";


export default function Home() {
  return (

   <div>
      <Banner></Banner>
      <FeaturedAnimals></FeaturedAnimals>
      <Footer></Footer>
   </div>
  );
}

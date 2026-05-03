import Banner from "@/components/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import Footer from "@/components/Footer";
import QurbaniTips from "@/components/QurbaniTips";
import { Button } from "@heroui/react";
import Link from "next/link";


export default function Home() {
  return (

   <div>
      <Banner></Banner>
      <FeaturedAnimals></FeaturedAnimals>
       <QurbaniTips></QurbaniTips>
      <Footer></Footer>
     
   </div>
  );
}

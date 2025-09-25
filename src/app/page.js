import Heropage from "@/components/Heropage";
import Category from "@/components/Category";
import BestSelling from "@/components/BestSelling";
import Banner from '@/components/Banner'
import Featuredproduct from '@/components/Fproduct'
import Newbanner from '@/components/Newbanner'
import Mostpopular from '@/components/Mostpopular'
import Justarrived from '@/components/Justarrived'
import Blog from '@/components/Blog'
import Appbanner from '@/components/Appbanner'
import Peopledemand from '@/components/Peopldemand'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Heropage/>
      <Category/>
      <BestSelling/>
      <Banner/>
      <Featuredproduct/>
      <Newbanner/>
      <Mostpopular/>
      <Justarrived/>
      <Blog/>
      <Appbanner/>
      <Peopledemand/>
      <Services/>
      <Footer/>
    </>
  );
}

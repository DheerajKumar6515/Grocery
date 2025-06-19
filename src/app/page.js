import Heropage from "@/components/Heropage";
import Category from "@/components/category";
import BestSelling from "@/components/bestSelling";
import Banner from '@/components/banner'
import Featuredproduct from '@/components/fproduct'
import Newbanner from '@/components/newbanner'
import Mostpopular from '@/components/mostpopular'
import Justarrived from '@/components/justarrived'
import Blog from '@/components/blog'
import Appbanner from '@/components/appbanner'
import Peopledemand from '@/components/peopldemand'
import Services from '@/components/services'
import Footer from '@/components/footer'

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

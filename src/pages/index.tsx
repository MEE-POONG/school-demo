import TheLayout from "@/components/TheLayout";
import { Activity } from "@/container/Home/Activity";
import { CarouselSlider } from "@/container/Home/Carousel";
import HeadHome from '@/container/Home/headder';
import Menu from "@/container/Home/menu";
import SlidNews from "@/container/Home/sliderNew";
import Statistics from "@/container/Home/statistics";
import Thesliderbar from "@/container/Home/TheSlider";


export default function Index() {
  return (
    <>
      <TheLayout>
        <HeadHome />
        {/* <SlidNews/> */}
        <Menu />
  
        <Activity />
        <Statistics />
        {/* <div className="min-h-screen">

        </div> */}
      </TheLayout>
    </>
  )
}
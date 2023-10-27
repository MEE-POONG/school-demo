import React from 'react';
import TheLayout from "@/components/TheLayout";
import { ContactUS } from "@/container/ContactUS";
import { NewNews } from "@/container/Home/NewNews";
import HeadHome from '@/container/Home/headder';
import { Menu } from "@/container/Home/menu";
import Statistics from "@/container/Home/statistics";
import { Relations } from "@/container/Home/Relations";
import HomeSlider from '@/container/Home/HomeSlide';

export default function Index() {
  return (
    <TheLayout>
      <HeadHome />
      <Menu />
      <HomeSlider />
      <NewNews />
      <Relations />
      <Statistics />
      <ContactUS />
    </TheLayout>
  )
}
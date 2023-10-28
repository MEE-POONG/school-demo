import React from 'react';
import TheLayout from "@/components/TheLayout";
import { ContactUS } from "@/container/ContactUS";
import { NewNews } from "@/container/Home/NewNews";
import { Relations } from "@/container/Home/Relations";
import HeadHome from '@/container/Home/headder';
import { Menu } from "@/container/Home/menu";
import Statistics from "@/container/Home/statistics";
import HomeSlider from '@/container/Home/homeslide';

export default function Index() {
  return (
    <TheLayout>
      <HeadHome />
      <Menu />
      <HomeSlider/>
      <NewNews />
      <Relations />
      <Statistics />
      <ContactUS />
    </TheLayout>
  )
}
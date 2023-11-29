import React from "react";
import TheLayout from "@/components/TheLayout";
import { ContactUS } from "@/container/ContactUS";
import { NewNews } from "@/container/Home/NewNews";
import { Relations } from "@/container/Home/Relations";
import { Menu } from "@/container/Home/menu";
import Statistics from "@/container/Home/statistics";
import { HomeSlider } from "@/container/Home/HomeSlider";
import HeadderHome from "@/container/Home/HeadderHome";

export default function Index() {
  return (
    <TheLayout>
      {/* <HeadderHome /> */}
      {/* <Menu /> */}
      {/* <HomeSlider /> */}
      <NewNews />
      <Relations />
      {/* <Statistics /> */}
      {/* <ContactUS /> */}
    </TheLayout>
  );
}

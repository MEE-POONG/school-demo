import TheLayout from "@/components/TheLayout";
import { NewNews } from "@/container/Home/News";
import HeadHome from '@/container/Home/headder';
import Menu from "@/container/Home/menu";
import Statistics from "@/container/Home/statistics";


export default function Index() {
  return (
    <>
      <TheLayout>
        <HeadHome />
        <Menu />
        <NewNews />
        <Statistics />
      </TheLayout>
    </>
  )
}
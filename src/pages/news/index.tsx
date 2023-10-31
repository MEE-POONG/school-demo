import Activityloader from "@/components/Activityloader";
import Newloader from "@/components/Newloader";
import TheLayout from "@/components/TheLayout";
import NewsAll from "@/container/Content/NewsAll";

export default function NewsPage() {
  return (
    <TheLayout>
      <div className="container mx-auto py-16">
        <h3 className="mt-24 text-center text-2xl lg:text-4xl">ข่าวสาร และกิจกรรม</h3>
        <div className="w-full h-0.5 bg-blue-400 my-7"></div>
        <NewsAll />
      </div>

    </TheLayout>
  );
}

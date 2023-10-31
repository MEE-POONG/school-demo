import TheLayout from "@/components/TheLayout";
import TitleText from "@/components/TitleText";
import NewsAll from "@/container/News/NewsAll";

export default function NewsPage() {
  return (
    <TheLayout>
      <div className="container mx-auto py-16">
        <TitleText titleText={"ข่าวสาร "} titleTextTo={"และกิจกรรม"} />
        <NewsAll />
      </div>
    </TheLayout>
  );
}

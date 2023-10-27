import Activityloader from "@/components/Activityloader";
import Newloader from "@/components/Newloader";
import TheLayout from "@/components/TheLayout";
import NewsAll from "@/container/Content/NewsAll";

export default function NewsPage() {
  return (
    <TheLayout>

      <NewsAll />

      {/* เนื้อหาข่าวประชาสัมพันธ์ */}

      <div className=" p-5">
        <Newloader />
      </div>

      {/* แทบ ข่าวกิจกรรม */}
      <div className="">
        <h1 className="text-xl md:text-3xl">
          ข่าวกิจกรรม
        </h1>
      </div>

      {/* เนื้อหาข่าวกิจกรรม */}
      <div className=" p-5">
        <Activityloader />
      </div>



    </TheLayout>
  );
}

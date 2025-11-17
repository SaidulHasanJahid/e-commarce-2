import CategoriesMenu from "./categori";
import HeroSwiper from "./swiper-hero";

export default function HeroSection() {
  return (
    <div className="container px-4 "> {/* left-right padding added */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:p-2 md:p-2 lg:py-4 p-4 sm:mt-6">
        {/* Categories Menu - শুধুমাত্র 1200px+ এ show হবে */}
        <div className="hidden xl:block">
          <CategoriesMenu />
        </div>

        {/* Hero Swiper */}
        <div className="col-span-1 xl:col-span-3 ">
          <HeroSwiper />
        </div>
      </div>
    </div>
  );
}

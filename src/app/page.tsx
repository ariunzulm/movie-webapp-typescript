"use client";

import FooterSection from "./homescreen/_components/FooterSection";
import HeaderResponsive from "./homescreen/_components/HeaderResponsive";
import MovieLists from "./homescreen/_components/MovieLists";
import Navigation from "./homescreen/_components/Nativagation";
import { UpcomingCarousel } from "./homescreen/_components/UpcomingCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 max-w-360 lg:mx-auto">
      {/* <Navigation /> */}
      <HeaderResponsive />
      {/* <UpcomingCarousel /> */}
      {/* <div className="flex flex-col gap-8">
        <MovieLists title={"Upcoming"} />
        <MovieLists title={"Popular"} />
        <MovieLists title={"Top rated"} />
      </div>
      <FooterSection /> */}
    </div>
  );
}

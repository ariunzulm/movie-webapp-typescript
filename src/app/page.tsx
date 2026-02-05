"use client";
import HomeNavigation from "./homescreen/_components/HomeNavigation";
import MovieHomeListings from "./homescreen/_components/HeroMovieCarousel";

import FooterSection from "./homescreen/_components/FooterSection";
import HeaderResponsive from "./homescreen/_components/HeaderResponsive";
import MovieLists from "./homescreen/_components/MovieLists";
import Navigation from "./homescreen/_components/Nativagation";
import { UpcomingCarousel } from "./homescreen/_components/UpcomingCarousel";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 max-w-360 lg:mx-auto">
      <HomeNavigation />
      {/* <UpcomingCarousel /> */}
      <MovieHomeListings />

      {/* <div className="flex flex-col gap-8">
        <MovieLists title={"Upcoming"} />
        <MovieLists title={"Popular"} />
        <MovieLists title={"Top rated"} />
      </div>
      <FooterSection /> */}
      {/* <Link href="/upcomingPage">Upco</Link> */}
    </div>
  );
}

"use client";

import HomeNavigation from "./homescreen/_components/Navigation";
import HeroMoviesCarousel from "./homescreen/_components/HeroCarousel";
import MovieHomeListings from "./homescreen/_components/MovieHomeListings";
import Footer from "./homescreen/_components/Footer";
import { Link } from "lucide-react";

type HomeProps = {
  movie: {
    movieName: string;
    description: string;
    id: number;
    rating: number;
    genre: string;
    posterImage: string;
  };
};
export default function Home({ movie }: HomeProps) {
  return (
    <div className="min-h-screen bg-background w-full  mx-auto">
      <HomeNavigation />
      <section>
        <HeroMoviesCarousel />
      </section>

      <main className="max-w-360 mx-auto sm:px-6 lg:px-8">
        <section className="py-8 md:py-12">
          <MovieHomeListings title="Upcoming" movie={movie} />
        </section>
        <div className="pb-16">
          <MovieHomeListings title="Upcoming" movie={movie} />
          <MovieHomeListings title="Popular" movie={movie} />
          <MovieHomeListings title="Top rated" movie={movie} />
        </div>
      </main>
      <Footer />
      {/* <Link href="/upcomingPage"></Link> */}
    </div>
  );
}

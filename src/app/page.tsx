"use client";

import HomeNavigation from "./homescreen/_components/Navigation";
import HeroMoviesCarousel from "./homescreen/_components/HeroCarousel";
import MovieHomeListings from "./homescreen/_components/MovieHomeListings";
import Footer from "./homescreen/_components/Footer";

type HomeProps = {
  movie: string;
};
export default function Home({ movie }: HomeProps) {
  return (
    <div className="min-h-screen bg-background">
      <HomeNavigation />
      <section className="relative">
        <HeroMoviesCarousel />
      </section>
      <main className="max-w-360 mx-auto sm:px-6 lg:px-8">
        <section className="py-8 md:py-12">
          <MovieHomeListings title="Upcoming" />
        </section>
        <div className="space-y-12 md:space-y-16 pb-16">
          <MovieHomeListings title="Upcoming" />
          <MovieHomeListings title="Popular" />
          <MovieHomeListings title="Top rated" />
        </div>
      </main>
      <Footer />
      {/* <Link href="/upcomingPage">Upco</Link> */}
    </div>
  );
}

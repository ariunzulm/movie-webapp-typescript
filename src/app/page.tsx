import MovieHomeListings from "./homescreen/_components/MovieHomeListings";
import Footer from "./homescreen/_components/Footer";
import Navigation from "./homescreen/_components/Navigation";

import HeroCarousel from "./homescreen/_components/HeroCarousel";
import { getPopularMovies } from "@/lib/api/get-popular-movies";
import { getUpcomingMovies } from "@/lib/api/get-upcoming-movies";
import { getTopRatedMovies } from "@/lib/api/get-toprated-movies";
import { getNowPlayingMovies } from "@/lib/api/get-nowPlaying-movies";

export default async function Home() {
  const { results: popular } = await getPopularMovies();
  const { results: upcoming } = await getUpcomingMovies();
  const { results: topRated } = await getTopRatedMovies();
  const { results: nowPlaying } = await getNowPlayingMovies();

  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <HeroCarousel movies={popular} />

      <main className="max-w-360 mx-auto sm:px-6 lg:px-8">
        <section className="py-8 md:py-12">
          <MovieHomeListings title="Now playing" movies={nowPlaying} />
        </section>
        <div className="pb-10">
          <MovieHomeListings title="Popular" movies={popular} />
          <MovieHomeListings title="Up coming" movies={upcoming} />
          <MovieHomeListings title="Top rated " movies={topRated} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

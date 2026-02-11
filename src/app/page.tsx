import MovieHomeListings from "./homescreen/_components/MovieHomeListings";
import Footer from "./homescreen/_components/Footer";
import Navigation from "./homescreen/_components/Navigation";

import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/_homescreenLib/api";
import HeroCarousel from "./homescreen/_components/HeroCarousel";

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
        <div className="pb-16">
          <MovieHomeListings title="Popular" movies={popular} />
          <MovieHomeListings title="Up coming" movies={upcoming} />
          <MovieHomeListings title="Top rated " movies={topRated} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

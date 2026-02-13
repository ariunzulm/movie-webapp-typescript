import Link from "next/link";
import MovieHomeCard from "./MovieHomeCard";
import MovieListingTitles from "./MovieListingTitles";
import { Movie } from "@/lib/types";
type MovieHomeListingsProps = {
  title: string;
  movies: Movie[];
};

const MovieHomeListings = async ({ title, movies }: MovieHomeListingsProps) => {
  return (
    <div className="mx-auto max-w-360">
      <MovieListingTitles title={title} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie) => {
          return (
            <Link key={movie.id} href={`/${movie.id}`}>
              <MovieHomeCard
                key={movie.id}
                movieName={movie.title}
                description={movie.overview}
                posterImage={movie.poster_path}
                rating={movie.vote_average}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default MovieHomeListings;

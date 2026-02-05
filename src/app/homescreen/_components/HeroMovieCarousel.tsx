import listingMoviesData from "../moviesData/listingMoviesData";
import { HeroMovieCard } from "./HeroMovieCard";
import MovieClassifies from "./MovieClassifies";

type MovieHomeListingsProps = {
  title: string;
};

export default function MovieHomeListings({ title }: MovieHomeListingsProps) {
  return (
    <div className="mx-5 max-w-360 mt-20">
      <MovieClassifies title={title} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-6">
        {listingMoviesData.map((movie) => {
          return <HeroMovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

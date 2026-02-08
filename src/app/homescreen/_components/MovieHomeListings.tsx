import { title } from "process";
import listingMoviesData from "../moviesData/listingMoviesData";
import { HeroCarouselCard } from "./HeroCarouselCard";

import MovieListingTitles from "./MovieListingTitles";

type MovieHomeListingsProps = {
  title: string;
  movie: {
    movieName: string;
    description: string;
    id: number;
    rating: number;
    posterImage: string;
  };
};

export default function MovieHomeListings({
  title,
  movie,
}: MovieHomeListingsProps) {
  return (
    <div className="mx-5 max-w-360 mt-20">
      <MovieListingTitles title={title} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-6">
        {listingMoviesData.map((movie) => {
          return <HeroCarouselCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

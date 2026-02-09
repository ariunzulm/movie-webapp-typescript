import listingMoviesData from "../homeScreeenData/listingMoviesData";
import MovieListingTitles from "./MovieListingTitles";
import { MovieHomeCard } from "./MovieHomeCard";

type MovieHomeListingsProps = {
  title: string;
  movie: {
    movieName: string;
    description: string;
    id: number;
    rating: number;
    genre: string;
    posterImage: string;
  };
};

export default function MovieHomeListings({
  title,
  movie,
}: MovieHomeListingsProps) {
  return (
    <div className="mx-auto max-w-360">
      <MovieListingTitles title={title} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {listingMoviesData.map((movie) => {
          return <MovieHomeCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

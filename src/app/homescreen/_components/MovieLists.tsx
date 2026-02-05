import listingMoviesData from "../moviesData/listingMoviesData";
import MovieCard from "./MovieCard";
import MovieClassifies from "./MovieClassifies";

type MovieListProps = {
  title: string;
};
export default function MovieLists({ title }: MovieListProps) {
  return (
    <div className="mx-5 max-w-360">
      <MovieClassifies title={title} />

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {listingMoviesData.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

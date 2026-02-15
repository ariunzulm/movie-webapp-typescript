import { getMovieById } from "@/lib/api/get-moviesById";
import { DetailsCardProps } from "../_utils/awaits";

const PosterDetails = async ({ params }: DetailsCardProps) => {
  const { movieId } = await params;

  const movie = await getMovieById(movieId);
  if (!movie.poster_path) {
    return (
      <div className="p-6 w-fit h-108 gap-4 flex items-center justify-center">
        <span className="text-gray-500">No poster available</span>
      </div>
    );
  }

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="w-fit h-108 gap-4 m-auto p-6">
      <img
        src={posterUrl}
        alt={movie.title}
        className="w-full h-full object-cover rounded-xl object-center shrink-0"
        loading="lazy"
      />
    </div>
  );
};

export default PosterDetails;

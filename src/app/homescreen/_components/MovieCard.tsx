import { Star } from "lucide-react";

type MovieCardProps = {
  movie: {
    movieName: string;
    rating: number;
    posterImage: string;
  };
};
export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="mx-auto h-auto max-w-sm">
      <div className="bg-[#F4F4F5] rounded-lg overflow-hidden  shadow-lg">
        <img
          src={movie.posterImage}
          alt={`${movie.movieName} poster`}
          className="h-auto w-full object-cover"
        />
        <div className="p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <Star fill="#FDE047" className="text-amber-200" />
            <p className="text-lg font-semibold text-gray-900">
              {movie.rating}
            </p>
            <p className="text-base text-gray-400">/10</p>
          </div>
          <p className="text-base pb-3 font-medium text-[#09090B] truncate">
            {movie.movieName}
          </p>
        </div>
      </div>
    </div>
  );
}

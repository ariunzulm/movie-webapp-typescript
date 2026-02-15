import { Badge } from "@/components/ui/badge";
import { getMovieById } from "@/lib/api/get-moviesById";
import { Calendar, Clock, Star } from "lucide-react";

type DetailsCardProps = {
  params: Promise<{ movieId: string }>;
};

export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-2 h-6 sm:h-6 md:h-8 lg:h-10 bg-red-500 rounded-full shrink-0" />
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-muted-foreground relative">
        <span className="relative z-10">{title}</span>
      </h2>
    </div>
  );
};

const MovieInfo = async ({ params }: DetailsCardProps) => {
  const { movieId } = await params;

  const movie = await getMovieById(movieId);

  const formatRunTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="p-6 flex flex-col max-w-6xl mx-auto border-none gap-4">
      <div className=" space-y-6 p-4 w-full rounded-2xl">
        <SectionHeader title="Genres" />
        <div className="flex flex-wrap gap-2">
          {movie.genres?.map((genre: any) => (
            <Badge
              key={genre.id}
              variant="secondary"
              className="border border-zinc-200 px-3 py-1.5 text-sm rounded-full transition-colors hover:bg-primary-foreground cursor-pointer"
            >
              {genre.name}
            </Badge>
          ))}
        </div>
        <div className="h-0.5 bg-zinc-200 w-full" />
      </div>

      <div className=" space-y-6 p-4 w-full rounded-2xl">
        <SectionHeader title="Overview" />
        <p className="text-muted-foreground leading-relaxed text-base">
          {movie.overview}
        </p>
      </div>
      <div className="h-0.5 bg-zinc-200 w-full" />
      <div className="space-y-6 p-4 w-full">
        <SectionHeader title="Details" />
        <div className="flex items-center gap-3 text-muted-foreground ">
          <Calendar className="w-4 h-4" />
          <span className="font-semibold">Release:</span>
          <span className="text-muted-foreground ">
            {formatDate(movie.release_date)}
          </span>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="font-semibold">Runtime:</span>
          <span className="text-muted-foreground ">
            {formatRunTime(movie.runtime)}
          </span>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />

          <span className="font-semibold">Rating:</span>
          <span className="flex items-center gap-1 text-muted-foreground ">
            <span className=" text-yellow-400 fill-yellow-400">★</span>
            {movie.vote_average.toFixed(1)} /10 (
            {movie.vote_count.toLocaleString()} votes)
          </span>
        </div>
        <div className="h-0.5 bg-zinc-200 w-full" />
      </div>
    </div>
  );
};
export default MovieInfo;

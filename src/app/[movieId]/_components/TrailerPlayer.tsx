import { getMovieById } from "@/lib/api/get-moviesById";
import { SectionHeader } from "./MovieInfo";

type DetailsCardProps = {
  params: Promise<{ movieId: string }>;
};

const TrailerPlayer = async ({ params }: DetailsCardProps) => {
  const { movieId } = await params;

  const movie = await getMovieById(movieId);

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div className="p-6 flex flex-col max-w-6xl mx-auto border-none gap-4">
      <div className="w-full">
        <img
          src={backdropUrl}
          alt={movie.title}
          className="aspect-video h-full max-w-lg object-cover rounded-xl mx-auto"
        />
      </div>
      <SectionHeader title="You may like" />
    </div>
  );
};

export default TrailerPlayer;

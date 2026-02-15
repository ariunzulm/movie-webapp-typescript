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
    <div className="p-6 flex flex-col w-full max-w-4xl mx-auto gap-4">
      <img
        src={backdropUrl}
        alt={movie.title}
        className="aspect-video w-full object-cover rounded-xl "
      />

      <SectionHeader title="You may like" />
    </div>
  );
};

export default TrailerPlayer;

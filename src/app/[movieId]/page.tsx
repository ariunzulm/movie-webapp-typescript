import { Button } from "@/components/ui/button";
import { getMovieById } from "@/lib/api/get-moviesById";
import { ArrowLeft, Tally1, Volume2 } from "lucide-react";

import Link from "next/link";
import Buttons from "./_components/Bottons";
import MovieInfo from "./_components/MovieInfo";
import TrailerPlayer from "./_components/TrailerPlayer";


type DetailsCardProps = {
  params: Promise<{ movieId: string }>;
};

const DetailsCard = async ({ params }: DetailsCardProps) => {
  const { movieId } = await params;

  const movie = await getMovieById(movieId);

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div className="min-h-screen text-black">
      <div className="w-full relative  h-[80vh]">
        <div className="relative w-full h-[80vh]">
          <div className="absolute inset-0">
            <img
              src={backdropUrl}
              alt={movie.title}
              className="aspect-video h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-transparent to-transparent" />
          </div>
          <Link href="/">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 left-6 z-50 h-12 w-12 text-white rounded-full hover:scale-125 border-2 border-white/50 bg-black/30 hover:bg-white/10 backdrop-blur-sm"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 z-50 h-12 w-12 text-white rounded-full hover:scale-125 border-2 border-white/50 bg-black/30 hover:bg-white/10 backdrop-blur-sm"
          >
            <Volume2 className="h-4 w-4" />
          </Button>
        </div>

        <div className="absolute bottom-2 left-0 p-12 z-40 group hover:scale-85">
          <div className="max-w-7xl mx-auto text-foreground space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-8">
              {movie.title}
            </h1>
            <Buttons />
          </div>
        </div>
        <MovieInfo params={params} />
        <TrailerPlayer params={params} />
      </div>
    </div>
  );
};



export default DetailsCard;

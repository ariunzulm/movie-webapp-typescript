import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getMovieById } from "@/lib/api/get-moviesById";
import { ArrowLeft, Download, Play, Plus, Volume2 } from "lucide-react";

import Link from "next/link";

type DetailsCardProps = {
  params: Promise<{ movieId: string }>;
};

const DetailsCard = async ({ params }: DetailsCardProps) => {
  const { movieId } = await params;

  const movie = await getMovieById(movieId);

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <div className="w-full relative">
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
              className="absolute top-6 left-6 z-50 h-10 w-10 rounded-full text-white bg-black/30 hover:bg-black/60 backdrop-blur-sm"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 z-50 h-10 w-10 rounded-full text-white bg-black/30 hover:bg-black/60 backdrop-blur-sm"
          >
            <Volume2 className="h-5 w-5" />
          </Button>
        </div>

        <div className="absolute bottom-5 left-0 p-12 z-40">
          <div className="max-w-7xl mx-auto text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
              {movie.title}
            </h1>

            <div className="flex items-center gap-4 sm:text-md">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-md"
              >
                <Play className="w-6 h-6 mr-2 fill-current" />
                Play Trailer
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="h-12 w-12 rounded-full border-2 border-white/50 bg-black/30 hover:bg-white/10 backdrop-blur-sm"
              >
                <Plus className="w-6 h-6" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="h-12 w-12 rounded-full border-2 border-white/50 bg-black/30 hover:bg-white/10 backdrop-blur-sm"
              >
                <Download className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                className="px-6 py-6 text-base font-medium border-2 border-white/50 bg-black/30 hover:bg-white/10 backdrop-blur-sm rounded-md"
              >
                Similars
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid p-8 md:grid-cols-3 gap-8">
        <div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 text-zinc-600">
              <span className="text-zinc-600 font-semibold">Release:</span>
              <span>{movie.release_date}</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-600">
              <span className="text-zinc-600 font-semibold">Runtime:</span>
              <span>{movie.runtime} min</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-600">
              <span className="text-zinc-600 font-semibold">Rating:</span>
              <span className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>
                {movie.vote_average}/10
              </span>
              <span className="text-zinc-600">({movie.vote_count} votes)</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Overview</h3>
            <p className="text-zinc-600 leading-relaxed text-base">
              {movie.overview}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Genres</h3>
            <div className="flex flex-wrap gap-2">
              {movie.genres?.map((genre: any) => (
                <Badge
                  key={genre.id}
                  variant="secondary"
                  className="bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700 px-4 py-2 text-sm rounded-full cursor-pointer transition-colors"
                >
                  {genre.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;

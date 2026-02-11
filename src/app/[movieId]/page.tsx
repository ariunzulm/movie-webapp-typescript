import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getMovieById } from "@/lib/movieDetailsLib/detailsApi";
import { Calendar, CalendarDays, Play, Star } from "lucide-react";

type DetailsCardProps = {
  params: Promise<{ movieId: string }>;
};

const DetailsCard = async ({ params }: DetailsCardProps) => {
  const { movieId } = await params;

  const movie = await getMovieById(movieId);
  const posterUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  return (
    <Card className="relative mx-auto w-full pt-0 border-none shadow-md">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={posterUrl}
        alt={movie.title}
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <Badge variant="secondary">
          <div className="flex items-center gap-1.5 px-5 py-1.5 ">
            <Star fill="#FDE047" className="text-amber-200" />
            <p className="text-lg font-semibold text-gray-900">
              {movie.vote_average}
            </p>
            <p className="text-base text-gray-400">/10</p>
          </div>
        </Badge>

        <CardTitle className="text-base sm:text-lg md:text-xl font-bold leading-tight line-clamp-2 text-black group-hover:text-primary transition-colors">
          {movie.title}
        </CardTitle>
        <CardDescription className="text-sm font-medium text-muted-foreground tracking-normal">
          {movie.overview}
        </CardDescription>
      </CardHeader>

      <CardFooter className="p-4 pt-0 flex gap-3">
        <Button className="w-fit shadow-xl bg-gray-900 text-white border border-gray-500 gap-2 hover:bg-primary/10 hover:text-primary transition-colors group/btn">
          <Play className="w-4 h-4 group-hover/btn:fill-current transition-all" />
          Play trailer
        </Button>
        <Badge variant="secondary">
          <div className="flex items-center gap-1.5 px-5 py-1.5 ">
            <CalendarDays className=" text-gray-700" />
            <p className="text-base text-gray-700">{movie.release_date}</p>
          </div>
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default DetailsCard;

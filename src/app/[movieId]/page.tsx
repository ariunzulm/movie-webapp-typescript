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
import {
  Calendar,
  CalendarDays,
  Dot,
  Play,
  Star,
  UserRound,
} from "lucide-react";
import Navigation from "../homescreen/_components/Navigation";

type DetailsCardProps = {
  params: Promise<{ movieId: string }>;
};

const DetailsCard = async ({ params }: DetailsCardProps) => {
  const { movieId } = await params;

  const movie = await getMovieById(movieId);
  const posterUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  return (
    <div>
      <Navigation />
      <Card className="relative mx-auto w-full pt-0 border-none shadow-md mt-15">
        <div className="absolute inset-0 z-30 aspect-video bg-black/5" />
        <CardHeader className="pt-5">
          <CardTitle className="text-2xl sm:text-3lg md:text-xl font-bold leading-tight line-clamp-2 text-black group-hover:text-primary transition-colors">
            {movie.title}
          </CardTitle>
          <Badge variant="secondary" className="flex justify-between w-full">
            <div className="flex items-center gap-1.5 px-5 py-1.5 ">
              <CalendarDays className=" text-gray-700 text-sm" />
              <span className="text-sm text-gray-700">
                {movie.release_date}
              </span>
              <Dot />
              <span className="text-sm text-gray-700">PG</span>
              <Dot />
              <span className="text-sm text-gray-700">{movie.runtime} min</span>
            </div>

            <div className="flex items-center gap-1.5 px-5 py-1.5 ">
              <Star fill="#FDE047" className="text-amber-200" />
              <p className="text-base font-semibold text-gray-900">
                {movie.vote_average}
              </p>
              <p className="text-sm text-gray-400">/10</p>
            </div>

            <span className="text-sm text-gray-700 flex gap-1.5 items-center">
              <UserRound />
              {movie.vote_count}
            </span>
          </Badge>
        </CardHeader>
        <div className="relative ">
          <img
            src={posterUrl}
            alt={movie.title}
            className="relative z-20 aspect-video w-full object-cover"
          />
          <Button className="absolute flex justify-end w-fit shadow-xl bg-gray-900 text-white border border-gray-500 gap-2 hover:bg-primary/10 hover:text-primary transition-colors group/btn">
            <Play className="w-4 h-4 group-hover/btn:fill-current transition-all" />
            Play trailer
          </Button>
        </div>
        <CardFooter className="p-4 pt-0 flex gap-10 items-start">
          <img
            src={posterUrl}
            alt={movie.title}
            className="relative z-20 aspect-video w-25 h-37 object-cover shadow-md"
          />
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-1">
              <Button className="w-fit shadow-xs rounded-full text-black border border-gray-200 hover:bg-primary/10 hover:text-primary transition-colors group/btn">
                Fairy Tale
              </Button>
              <Button className="w-fit shadow-xs rounded-full text-black border border-gray-200 hover:bg-primary/10 hover:text-primary transition-colors group/btn">
                Pop Musical
              </Button>
              <Button className="w-fit shadow-xs rounded-full text-black border border-gray-200 hover:bg-primary/10 hover:text-primary transition-colors group/btn">
                Fantasy
              </Button>
              <Button className="w-fit shadow-xs rounded-full text-black border border-gray-200 hover:bg-primary/10 hover:text-primary transition-colors group/btn">
                Musical
              </Button>
              <Button className="w-fit shadow-xs rounded-full text-black border border-gray-200 hover:bg-primary/10 hover:text-primary transition-colors group/btn">
                Romance
              </Button>
            </div>
            <CardDescription className="text-base font-medium text-muted-foreground tracking-normal">
              {movie.overview}
            </CardDescription>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DetailsCard;

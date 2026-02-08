import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type MovieHomeCardProps = {
  movie: {
    movieName: string;
    rating: number;
    posterImage: string;
  };
};
export function MovieHomeCard({ movie }: MovieHomeCardProps) {
  const { movieName, posterImage, rating } = movie;
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 shadow-2xl border-none">
      <div className="absolute inset-0 z-30 aspect-video bg-black/-50" />
      <div className="w-full aspect-2/3 overflow-hidden max-h-59">
        <img
          src={posterImage}
          alt={`${movieName} poster`}
          className="relative z-20 w-full object-cover rounded-t-xl brightness-100 dark:brightness-40"
        />
      </div>
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">
            <div className="flex items-center gap-1.5 px-3 py-1.5 ">
              <Star fill="#FDE047" className="text-amber-200" />
              <p className="text-lg font-semibold text-gray-900">{rating}</p>
              <p className="text-base text-gray-400">/10</p>
            </div>
          </Badge>
        </CardAction>
        <p className="text-sm leading-5 text-[#09090B]">Now Playing:</p>
      </CardHeader>
      <CardTitle className="text-[18px] px-6 font-semibold leading-4 md:text-xl lg:text-2xl">
        {movieName}
      </CardTitle>

      <CardFooter>
        <Button className="w-fit text-sm px-2 py-4 text-white bg-gray-900 cursor-pointer">
          <Play />
          Watch trailer
        </Button>
      </CardFooter>
    </Card>
  );
}

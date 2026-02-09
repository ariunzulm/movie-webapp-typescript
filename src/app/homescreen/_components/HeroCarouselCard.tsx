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

type HeroCarouselCardProps = {
  movie: {
    id: number;
    movieName: string;
    description: string;
    rating: number;
    posterImage: string;
  };
};
export function HeroCarouselCard({ movie }: HeroCarouselCardProps) {
  const { id, movieName, posterImage, description, rating } = movie;
  return (
    <Card className="w-full bg-transparent border-none pointer-events-auto">
      <div className="relative h-100 w-full overflow-hidden md:h-125">
        <img
          src={posterImage}
          alt={`${movieName} poster`}
          className="z-20 w-full h-full object-cover object-center rounded-xl transition-transform duration-500 brightness-100 dark:brightness-50"
        />
        <div className="absolute inset-0 z-50 flex flex-col justify-end items-start text-white p-6 md:p-16 lg:p-20 md:items-start lg:items-start">
          <CardHeader>
            <p className="text-md leading-5 text-gray-50">Now Playing:</p>

            <div className="flex items-center gap-1.5 py-3">
              <Star fill="#FDE047" className="text-amber-200" />
              <p className="text-lg font-semibold text-gray-50">{rating}</p>
              <p className="text-base text-gray-400">/10</p>
            </div>
          </CardHeader>
          <CardTitle className="text-lg px-6 font-bold leading-8 md:text-2xl lg:text-3xl">
            {movieName}
          </CardTitle>
          <CardDescription className="text-sm max-w-md px-6 my-5">
            {description}
          </CardDescription>
          <CardFooter>
            <Button className="w-full border border-gray-50gap-2 hover:bg-primary/10 hover:text-primary transition-colors group/btn">
              <Play className="w-4 h-4 group-hover/btn:fill-current transition-all" />
              Watch trailer
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}

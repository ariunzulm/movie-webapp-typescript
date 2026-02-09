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
import { useState } from "react";

type MovieHomeCardProps = {
  movie: {
    movieName: string;
    rating: number;
    posterImage: string;
    genre: string;
  };
  onPlayClick?: () => void;
};
export function MovieHomeCard({ movie, onPlayClick }: MovieHomeCardProps) {
  const { movieName, posterImage, rating, genre } = movie;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card
      className="group relative w-full pt-0 shadow-2xl border-none   transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary/50 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 z-30 aspect-2/3 bg-black/-50" />
      <div className="w-full overflow-hidden">
        <img
          src={posterImage}
          alt={`${movieName} poster`}
          className="relative z-20 w-full object-cover rounded-t-2xl  brightness-100 dark:brightness-40"
        />
      </div>
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">
            <div className="flex items-center gap-1.5 px-5 py-1.5 ">
              <Star fill="#FDE047" className="text-amber-200" />
              <p className="text-lg font-semibold text-gray-900">{rating}</p>
              <p className="text-base text-gray-400">/10</p>
            </div>
          </Badge>
        </CardAction>
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Now Playing:
        </span>
        {genre && (
          <Badge variant="outline" className="text-xs">
            {genre}
          </Badge>
        )}
      </CardHeader>
      <CardTitle className="text-base px-5 sm:text-lg md:text-xl font-bold leading-tight line-clamp-2 text-black group-hover:text-primary transition-colors">
        {movieName}
      </CardTitle>

      <CardFooter className="hidden sm:flex p-4 pt-0">
        <Button
          className="w-full shadow-xl border border-gray-500 gap-2 hover:bg-primary/10 hover:text-primary transition-colors group/btn"
          onClick={onPlayClick}
        >
          <Play className="w-4 h-4 group-hover/btn:fill-current transition-all" />
          Watch trailer
        </Button>
      </CardFooter>
    </Card>
  );
}

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import carouselMoviesData from "../moviesData/carouselMoviesData";
import { HeroCarouselCard } from "./HeroCarouselCard";

type HeroCarouselCardProps = {
  movie: {
    id: number;
    movieName: string;
    description: string;
    rating: number;
    posterImage: string;
  };
};

export default function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto mt-10 w-full h-fit relative">
      <Carousel setApi={setApi} className="shadow-2xl">
        <CarouselContent>
          {carouselMoviesData.map((movieCard, index) => {
            return (
              <CarouselItem key={index}>
                <Card className="border-none">
                  <HeroCarouselCard movie={movieCard} />
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="absolute top-1/2 left-15">
          <CarouselPrevious />
        </div>
        <div className="absolute top-1/2 -right-8">
          <CarouselNext />
        </div>
      </Carousel>
      {/* <div className="text-muted-foreground py-2 text-center text-sm">
        {current} of {count}
      </div> */}
    </div>
  );
}

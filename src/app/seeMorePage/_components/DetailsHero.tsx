import MovieHomeListings from "@/app/homescreen/_components/MovieHomeListings";

type SeeMoreHeroProps = {
  title: string;
  movie: {
    movieName: string;
    description: string;
    id: number;
    rating: number;
    genre: string;
    posterImage: string;
  };
};

export default function SeeMoreHero({ movie }: SeeMoreHeroProps) {
  return (
    <div>
      <MovieHomeListings movie={movie} title="Upcoming" />
    </div>
  );
}

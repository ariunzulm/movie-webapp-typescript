import MovieHomeListings from "@/app/homescreen/_components/MovieHomeListings";
import Navigation from "@/app/homescreen/_components/Navigation";

export default function DetailsHero() {
  return (
    <div>
      <Navigation />
      <MovieHomeListings movie={} title="Upcoming" />
    </div>
  );
}

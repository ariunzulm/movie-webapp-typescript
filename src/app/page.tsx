import MovieCard from "./homescreen/_components/MovieCard";
import MovieList from "./homescreen/_components/MovieCard";
import Navigation from "./homescreen/_components/Nativagation";
import { UpcomingCarousel } from "./homescreen/_components/UpcomingCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <UpcomingCarousel />
      <MovieCard />
    </div>
  );
}

import listingData from "../moviesData/listingData";
import MovieCard from "./MovieCard";

export default function MovieLists() {
  return (
    <div>
      {listingData.map((movie) => (
        <\ key={movie.id} />
      ))}
    </div>
  );
}

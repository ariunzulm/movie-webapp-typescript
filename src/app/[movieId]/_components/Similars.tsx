import { getMovieById } from "@/lib/api/get-moviesById";
import { DetailsCardProps } from "../_utils/awaits";
import { SectionHeader } from "./MovieInfo";

const Similars = async ({ params }: DetailsCardProps) => {
  const { movieId } = await params;

  const movie = await getMovieById(movieId);

  return (
    <div className="p-6 flex flex-col w-full max-w-4xl mx-auto gap-4">
      <SectionHeader title="You may like" />
    </div>
  );
};

export default Similars;

import { Movie } from "@/lib/types";

export type DetailsCardProps = {
  params: Promise<{ movieId: string }>;
};

export type SearchProps = {
  title: string;
  movies: Movie[];
};

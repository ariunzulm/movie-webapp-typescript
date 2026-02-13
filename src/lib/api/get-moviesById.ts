import { options } from ".";
import { DetailsRoot } from "../types";

export const getMovieById = async (movieId: string): Promise<DetailsRoot> => {
  const response = await fetch(
    `${process.env.baseUrl}/${movieId}?language=en-US`,
    options,
  );
  const data = await response.json();

  return data;
};

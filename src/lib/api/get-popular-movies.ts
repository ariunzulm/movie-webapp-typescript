import { options } from ".";
import { Response } from "../types";

const popularMovies = "/popular?language=en-US&page=1";

export const getPopularMovies = async (): Promise<Response> => {
  const response = await fetch(
    `${process.env.baseUrl}${popularMovies}`,
    options,
  );

  const data = await response.json();

  return data;
};

import { options } from ".";
import { Response } from "../types";

const topRatedMovies = "/top_rated?language=en-US&page=1";

export const getTopRatedMovies = async (): Promise<Response> => {
  const response = await fetch(
    `${process.env.baseUrl}${topRatedMovies}`,
    options,
  );
  const data = await response.json();

  return data;
};

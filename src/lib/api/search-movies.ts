import { options } from ".";
import { Response } from "../types";

export const getSearchMovies = async (
  searchValue: string,
  page = 1,
): Promise<Response> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}`,
    options,
  );
  const data = await response.json();

  return data;
};

import { options } from ".";
import { Response } from "../types";

const upcomingMovies = "/upcoming?language=en-US&page=1";

export const getUpcomingMovies = async (): Promise<Response> => {
  const response = await fetch(
    `${process.env.baseUrl}${upcomingMovies}`,
    options,
  );
  const data = await response.json();

  return data;
};

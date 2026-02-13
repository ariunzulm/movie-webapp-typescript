import { options } from ".";
import { Response } from "../types";

const nowPlayingMovies = "/now_playing?language=en-US&page=1";

export const getNowPlayingMovies = async (): Promise<Response> => {
  const response = await fetch(
    `${process.env.baseUrl}${nowPlayingMovies}`,
    options,
  );
  const data = await response.json();

  return data;
};

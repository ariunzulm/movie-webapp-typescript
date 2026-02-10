import { Response } from "./types";

const baseUrl = "https://api.themoviedb.org/3/movie";

const popularMovies = "/popular?language=en-US&page=1";
const upcomingMovies = "/upcoming?language=en-US&page=1";
const topRatedMovies = "/top_rated?language=en-US&page=1";
const nowPlayingMovies = "/now_playing?language=en-US&page=1";

const token = process.env.token;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const getPopularMovies = async (): Promise<Response> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    options,
  );
  const data = await response.json();

  return data;
};

export const getUpcomingMovies = async (): Promise<Response> => {
  const response = await fetch(`${baseUrl}${upcomingMovies}`, options);
  const data = await response.json();

  return data;
};
export const getTopRatedMovies = async (): Promise<Response> => {
  const response = await fetch(`${baseUrl}${topRatedMovies}`, options);
  const data = await response.json();

  return data;
};
export const getNowPlayingMovies = async (): Promise<Response> => {
  const response = await fetch(`${baseUrl}${nowPlayingMovies}`, options);
  const data = await response.json();

  return data;
};

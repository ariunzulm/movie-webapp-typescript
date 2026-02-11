import { DetailsRoot } from "./detailType";

const baseUrl = "https://api.themoviedb.org/3/movie";


const token = process.env.token;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const getMovieById = async (movieId:string): Promise<DetailsRoot> => {
  const response = await fetch(`${baseUrl}/${movieId}?language=en-US`, options);
  const data = await response.json();

  return data;
};

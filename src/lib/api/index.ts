export * from "./get-popular-movies";
export * from "./get-toprated-movies";
export * from "./get-upcoming-movies";

export const token = process.env.token;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

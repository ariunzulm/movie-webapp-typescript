const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTcxZGQzNjQ0MTMyNjI0ZTQxM2VkOWQ1MjI4Yjg3YSIsIm5iZiI6MTc3MDYwOTAxMC43MDQsInN1YiI6IjY5ODk1OTcyN2MyYWQzM2ZmMmY4MTQ5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D72PuT06oS9Jl_rwmdRtiocEICUtIrusWxrCv4_KJ_8";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

const getMovies = async () => {
  const response = await fetch(url, options);
  const movies = await response.json();
  console.log(movies.results[0]);
};
getMovies();




// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// const getToDos = async () => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
//   console.log("async function ends here");
// };
// getToDos();

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("ok");

//     // reject("error");
//   }, 3000);
// });

// promise
//   .then((response) => {
//     console.log("response", response);
//   })
//   .catch((error) => {
//     console.log(error, "error");
//   });

// const promiseAsync = async () => {
//   try {
//     const data = await promise;
//     console.log({ data });
//   } catch (error) {
//     console.log({ error });
//   }
// };
// promiseAsync();

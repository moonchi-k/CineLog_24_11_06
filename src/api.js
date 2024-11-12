const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",

  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzNkOTNkOTI2NmQ5NDEwYTJjZTVlMjg5MGYzZGVkYSIsIm5iZiI6MTczMDI3MDU5NC41NjMwMTM4LCJzdWIiOiI2NzIxYjM1OTE4MGIwYTVhYjkwYzEzNTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-yHv_JBWP1uIjZHOnM33wdqTvmpL67IaQYUtN2GYl4I",
  },
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const movieDetail = (id) => {
  console.log(id);
  return fetch(url(`movie/${id}`), options).then((res) => res.json());
};

export const searchMovie = (keyword) => {
  console.log(keyword);
  const searchUrl =
    baseUrl +
    `search/movie?query=${keyword}&include_adult=false&language=ko-kr`;
  return fetch(searchUrl, options).then((res) => res.json());
};

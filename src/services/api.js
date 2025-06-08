import axios from "axios";

const API_KEY = "70c03756b5e4a1426a6b866921fc3958";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGMwMzc1NmI1ZTRhMTQyNmE2Yjg2NjkyMWZjMzk1OCIsIm5iZiI6MTc0Mjc4MjgwMS45OTIsInN1YiI6IjY3ZTBjMTUxN2QwNTY1YWYwMjA3ZGIzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9FA25F404vRHE1uR_5GLUHh2GzKKI49X_TsjIxXf3no";
const BASE_URL = "https://api.themoviedb.org/3";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const fetchMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?page=1&api_key=${API_KEY}`
    );

    // console.log(response.data.results);

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNowPlayingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?page=1&include_video=true&sort_by=popularity.desc&api_key=${API_KEY}`
    );

    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const searchMovies = async (query) => {
  try {
    const search = await axios.get(
      `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
    );

    return search.data.results;
  } catch (error) {
    console.log(error);
  }
};

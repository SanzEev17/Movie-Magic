"use server";

import { Movie } from "@/typings";
import { fetchFromTMDB } from "./fetchFromTMDB";

export async function getNowPlayingMovies(page: number = 1) {
  const url = new URL("https://api.themoviedb.org/3/movie/now_playing");
  const data = await fetchFromTMDB(url, page);
  return data.results as Movie[];
}

export async function getPopularMovies(page: number = 1) {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await fetchFromTMDB(url, page);
  return data.results as Movie[];
}
export async function getTopRatedMovies(page: number = 1) {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  const data = await fetchFromTMDB(url, page);
  return data.results as Movie[];
}

"use server";

import { TVShow } from "@/typings";
import { fetchFromTMDB } from "./fetchFromTMDB";

export async function getNowAiringTvShows(page: number = 1) {
  const url = new URL("https://api.themoviedb.org/3/tv/on_the_air");
  const data = await fetchFromTMDB(url, page);
  return data.results as TVShow[];
}

export async function getPopularTvShows(page: number = 1) {
  const url = new URL("https://api.themoviedb.org/3/tv/popular");
  const data = await fetchFromTMDB(url, page);
  return data.results as TVShow[];
}

export async function getTopRatedTvShows(page: number = 1) {
  const url = new URL("https://api.themoviedb.org/3/tv/top_rated");
  const data = await fetchFromTMDB(url, page);
  return data.results as TVShow[];
}

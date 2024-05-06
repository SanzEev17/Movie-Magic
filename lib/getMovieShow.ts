"use server";

import { Movie, SearchResults } from "@/typings";

async function fetchFromTMDB(url: URL, cacheTime?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    //* Caching the data
    next: {
      revalidate: cacheTime || 60 * 60 * 12, //* Revalidates cache every 12 hrs
    },
  };

  const response = await fetch(url.toString(), options);
  const data = await response.json();

  return data;
}

export async function getNowPlayingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/now_playing");
  const data = await fetchFromTMDB(url);
  return data.results as Movie[];
}

export async function getTrendingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await fetchFromTMDB(url);
  return data.results as Movie[];
}

export async function getNowAiringTvShows() {
  const url = new URL("https://api.themoviedb.org/3/tv/on_the_air");
  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getTrendingTvShows() {
  const url = new URL("https://api.themoviedb.org/3/tv/popular");
  const data = await fetchFromTMDB(url);
  return data.results;
}

"use server";

import { Genres, TVSeasonEpisode, TVShow, TVShowDetails } from "@/typings";
import { fetchFromTMDB } from "./fetchFromTMDB";

export async function getTvShowById(id: string, page: number = 1) {
  const url = new URL(`https://api.themoviedb.org/3/tv/${id}`);
  const data = await fetchFromTMDB(url, page);
  return data as TVShowDetails;
}

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

export async function getTvShowGenres() {
  const url = new URL("https://api.themoviedb.org/3/genre/tv/list?language=en");
  const data = await fetchFromTMDB(url);
  return data as Genres;
}

export async function getGenreTvShows(genreId: string, page: number = 1) {
  const url = new URL("https://api.themoviedb.org/3/discover/tv");
  url.searchParams.set("with_genres", genreId);
  const data = await fetchFromTMDB(url, page);
  return data.results as TVShow[];
}

export async function getTvShowsByYear(year: string, page: number = 1) {
  const url = new URL("https://api.themoviedb.org/3/discover/tv");
  url.searchParams.set("first_air_date_year", year);
  const data = await fetchFromTMDB(url, page);
  return data.results as TVShow[];
}

export async function getRecommendedTvShows(
  tvShowId: string,
  page: number = 1
) {
  const url = new URL(
    `https://api.themoviedb.org/3/tv/${tvShowId}/recommendations`
  );
  const data = await fetchFromTMDB(url, page);
  return data.results as TVShow[];
}

export async function getTvSeason(
  tvShowId: string,
  seasonId: string,
  page: number = 1
) {
  const url = new URL(
    `https://api.themoviedb.org/3/tv/${tvShowId}/season/${seasonId}`
  );
  const data = await fetchFromTMDB(url, page);
  return data.episodes as TVSeasonEpisode[];
}

"use server";

import { Genres, Movie, MovieDetails } from "@/typings";
import { fetchFromTMDB } from "./fetchFromTMDB";

export async function getMovieById(movieId: string, page: number = 1) {
  const url = new URL(`https://api.themoviedb.org/3/movie/${movieId}`);
  const data = await fetchFromTMDB(url, page);
  return data as MovieDetails;
}

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

export async function getMovieGenres() {
  const url = new URL(
    "https://api.themoviedb.org/3/genre/movie/list?language=en"
  );
  const data = await fetchFromTMDB(url);
  return data as Genres;
}

export async function getGenreMovies(genreId: string, page: number = 1) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  url.searchParams.set("with_genres", genreId);
  const data = await fetchFromTMDB(url, page);
  return data.results as Movie[];
}

export async function getMoviesByYear(year: string, page: number = 1) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  url.searchParams.set("primary_release_year", year);
  const data = await fetchFromTMDB(url, page);
  return data.results as Movie[];
}

export async function getRecommendedMovies(movieId: string, page: number = 1) {
  const url = new URL(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations`
  );
  const data = await fetchFromTMDB(url, page);
  return data.results as Movie[];
}

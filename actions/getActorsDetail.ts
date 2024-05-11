"use server";
import { Movie, Person, TVShow } from "@/typings";
import { fetchFromTMDB } from "./fetchFromTMDB";

export async function getActorsDetail(actorId: string, page: number = 1) {
  const url = new URL(`https://api.themoviedb.org/3/person/${actorId}`);
  const data = await fetchFromTMDB(url, page);
  return data as Person;
}

export async function getActorsMovie(actorId: string, page: number = 1) {
  const url = new URL(`https://api.themoviedb.org/3/person/${actorId}/movie_credits`);
  const data = await fetchFromTMDB(url, page);
  return data.cast as Movie[];
}
export async function getActorsTvShows(actorId: string, page: number = 1) {
  const url = new URL(`https://api.themoviedb.org/3/person/${actorId}/tv_credits`);
  const data = await fetchFromTMDB(url, page);
  return data.cast as TVShow[];
}

"use server";
import { SearchResults } from "@/typings";
import { fetchFromTMDB } from "./fetchFromTMDB";

export async function getSearchResults(query: string, page: number = 1) {
  const url = new URL("https://api.themoviedb.org/3/search/multi");
  url.searchParams.set("query", query);
  const data = await fetchFromTMDB(url, page);
  return data.results as SearchResults[];
}

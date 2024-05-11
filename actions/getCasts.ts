"use server";

import { Cast } from "@/typings";
import { fetchFromTMDB } from "./fetchFromTMDB";

export async function getCasts(
  id: string,
  mediaType: "movie" | "tv",
  page: number = 1
) {
  const url = new URL(
    `https://api.themoviedb.org/3/${mediaType}/${id}/credits`
  );
  const data = await fetchFromTMDB(url, page);
  return data.cast as Cast[];
}

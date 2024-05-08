"use server";

export async function fetchFromTMDB(
  url: URL,
  page: number = 1,
  cacheTime?: number
) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", page.toString());

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

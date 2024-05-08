import { getMovieGenres } from "@/actions/getMovies";
import { getTvShowGenres } from "@/actions/getTvShows";
import Link from "next/link";
import React from "react";

const GenresList = async ({ contentType }: { contentType: "movie" | "tv" }) => {
  const path = contentType === "movie" ? "movies" : "tv-shows";
  const data = await (contentType === "movie"
    ? getMovieGenres()
    : getTvShowGenres());

  return (
    <div className="py-2">
      <div className="py-6 grid grid-cols-card gap-5">
        {data.genres.map((genre, index) => (
          <Link key={index} href={`/${path}/genre/${genre.id}`}>
            <div className="py-3 text-center shadow-md border-t rounded-lg font-semibold hover:bg-gray-800 hover:text-white">
              {genre.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenresList;

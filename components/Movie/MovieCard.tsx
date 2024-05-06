import React from "react";
import Badge from "../Badge";
import { Movie, TVShow } from "@/typings";
import Image from "next/image";
import { Star } from "lucide-react";

const MovieCard = async ({ movieData }: { movieData: Movie }) => {
  const averageRating = movieData.vote_average.toFixed(1);
  const imageUrl = `https://image.tmdb.org/t/p/original/${movieData.poster_path}`;

  const releaseYear = movieData.release_date?.split("-")[0];

  return (
    <div className="min-w-44 h-64 rounded-xl shadow-custom overflow-hidden">
      <div className=" w-full h-full relative">
        <Image
          src={imageUrl}
          alt={movieData.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 10vw"
          quality={80}
          className="object-cover"
        />
        <div className="p-2 w-full absolute flex justify-between">
          <Badge Icon={Star} iconFill="yellow" text={averageRating} />
          <Badge text={releaseYear} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

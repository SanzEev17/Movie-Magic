import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "@/typings";

type CarouselProps = {
  title: string;
  data: Movie[];
  isVertical?: boolean;
};

const MovieCarousel = async ({
  title,
  data,
  isVertical = false,
}: CarouselProps) => {
  return (
    <div>
      <h1 className="text-2xl font-medium">{title}</h1>
      <div
        className={`${
          isVertical ? "flex-wrap" : "overflow-x-scroll"
        } w-full py-4 flex space-x-5 no-scrollbar`}
      >
        {data.map((movieTv) => (
          <MovieCard key={movieTv.id} movieData={movieTv} />
        ))}
      </div>
    </div>
  );
};

export default MovieCarousel;

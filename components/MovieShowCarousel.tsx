import React from "react";
import MovieShowCard from "./MovieShowCard";
import { Movie } from "@/typings";

type CarouselProps = {
  title: string;
  data: Movie[];
  isVertical?: boolean;
};

const MovieShowCarousel = async ({
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
        {data.map((movie) => (
          <MovieShowCard key={movie.id} movieData={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieShowCarousel;

import React from "react";
import { TVShow } from "@/typings";
import TVShowCard from "./TVShowCard";

type CarouselProps = {
  title: string;
  data: TVShow[];
  isVertical?: boolean;
};

const TVShowCarousel = async ({
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
        {data.map((tvShow) => (
          <TVShowCard key={tvShow.id} tvShowData={tvShow} />
        ))}
      </div>
    </div>
  );
};

export default TVShowCarousel;

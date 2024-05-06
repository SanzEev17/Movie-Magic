import React from "react";
import { Movie, TVShow } from "@/typings";
import ContentCard from "./ContentCard";

type CarouselProps = {
  title: string;
  contentType: "movie" | "tv" | "people";
  data: TVShow[] | Movie[];
  isVertical?: boolean;
};

const ContentCarousel = async ({
  title,
  contentType,
  data,
  isVertical = false,
}: CarouselProps) => {
  return (
    <div>
      <h1 className="text-2xl font-medium">{title}</h1>
      <div
        className={`${
          isVertical ? "flex-wrap gap-5" : "overflow-x-scroll space-x-5"
        } w-full py-4 flex no-scrollbar`}
      >
        {data.map((item) => (
          <ContentCard key={item.id} contentType={contentType} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;

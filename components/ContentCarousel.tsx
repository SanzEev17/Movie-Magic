import React from "react";
import { Movie, TVShow } from "@/typings";
import ContentCard from "./ContentCard";
import InfiniteScrolling from "./InfiniteScrolling";

type CarouselProps = {
  title?: string;
  contentType: "movie" | "tv" | "people";
  fetchData: () => Promise<TVShow[] | Movie[]>;
  isVertical?: boolean;
};

const ContentCarousel = async ({
  title,
  contentType,
  fetchData,
  isVertical = false,
}: CarouselProps) => {
  const data = await fetchData();
  return (
    <div className="py-2">
      {title && <h1 className="text-2xl font-medium">{title}</h1>}
      <div
        className={`${
          isVertical
            ? "grid grid-cols-card gap-5"
            : "flex overflow-x-scroll space-x-5"
        } w-full py-4  no-scrollbar`}
      >
        {data.map((item) => (
          <ContentCard key={item.id} contentType={contentType} data={item} />
        ))}
        {isVertical && (
          <InfiniteScrolling contentType="movie" fetchData={fetchData} />
        )}
      </div>
    </div>
  );
};

export default ContentCarousel;

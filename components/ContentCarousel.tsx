import React from "react";
import { Movie, Person, PersonSearch, SearchResults, TVShow } from "@/typings";
import ContentCard from "./ContentCard";
import InfiniteScrolling from "./InfiniteScrolling";

type CarouselProps = {
  title?: string;
  contentType: "movie" | "tv" | "person" | "all";
  fetchData: () => Promise<TVShow[] | Movie[] | Person[] | SearchResults[]>;
  isVertical?: boolean;
};

const ContentCarousel = async ({
  title,
  contentType,
  fetchData,
  isVertical = false,
}: CarouselProps) => {
  //* The data is fetched here by passing function as a prop just for infinite scrolling
  const data = await fetchData();
  return data.length > 0 ? (
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
          <InfiniteScrolling contentType={contentType} fetchData={fetchData} />
        )}
      </div>
    </div>
  ) : isVertical ? (
    <div className="py-4">No results found</div>
  ) : null;
};

export default ContentCarousel;

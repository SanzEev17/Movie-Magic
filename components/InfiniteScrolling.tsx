"use client";
import { Movie, Person, SearchResults, TVShow } from "@/typings";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ContentCard from "./ContentCard";
import SkeletonCard from "./Skeleton/SkeletonCard";

let page = 2;

const InfiniteScrolling = ({
  contentType,
  fetchData,
}: {
  contentType: "movie" | "tv" | "person" | "all";
  fetchData: (
    page: number
  ) => Promise<Movie[] | TVShow[] | Person[] | SearchResults[]>;
}) => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<Movie[] | TVShow[]>([]);

  useEffect(() => {
    if (inView) {
      fetchData(page).then((res) => {
        setData([...data, ...res] as Movie[] | TVShow[]);
        page++;
      });
    }
  }, [inView, data, fetchData]);

  return (
    <>
      {data.map((item) => (
        <ContentCard key={item.id} contentType={contentType} data={item} />
      ))}
      <div ref={ref}>
        <SkeletonCard />
      </div>
    </>
  );
};

export default InfiniteScrolling;

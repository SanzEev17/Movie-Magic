"use client";
import { Movie, TVShow } from "@/typings";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ContentCard from "./ContentCard";

let page = 2;

const InfiniteScrolling = ({
  contentType,
  fetchData,
}: {
  contentType: "movie" | "tv";
  fetchData: (page: number) => Promise<Movie[] | TVShow[]>;
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
      <div className="w-full text-center" ref={ref}>
        Load more
      </div>
    </>
  );
};

export default InfiniteScrolling;

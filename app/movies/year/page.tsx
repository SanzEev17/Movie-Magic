import { getNowPlayingMovies } from "@/actions/getMovies";
import ContentCarousel from "@/components/ContentCarousel";
import React from "react";

const YearMoviesPage = () => {
  return (
    <ContentCarousel
      isVertical={true}
      contentType="movie"
      fetchData={getNowPlayingMovies}
    />
  );
};

export default YearMoviesPage;

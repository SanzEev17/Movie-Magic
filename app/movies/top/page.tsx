import ContentCarousel from "@/components/ContentCarousel";
import { getTopRatedMovies } from "@/actions/getMovies";
import React from "react";

const TopRatedMoviesPage = () => {
  return (
    <ContentCarousel
      isVertical={true}
      contentType="movie"
      fetchData={getTopRatedMovies}
    />
  );
};

export default TopRatedMoviesPage;

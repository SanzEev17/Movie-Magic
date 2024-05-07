import ContentCarousel from "@/components/ContentCarousel";
import { getPopularMovies } from "@/actions/getMovies";
import React from "react";

const PopularMoviesPage = async () => {
  return (
    <ContentCarousel
      isVertical={true}
      contentType="movie"
      fetchData={getPopularMovies}
    />
  );
};

export default PopularMoviesPage;

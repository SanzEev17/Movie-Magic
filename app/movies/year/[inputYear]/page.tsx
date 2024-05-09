import { getMoviesByYear } from "@/actions/getMovies";
import ContentCarousel from "@/components/ContentCarousel";
import React from "react";

const MoviesByYearPage = ({ params }: { params: { inputYear: string } }) => {
  const getMoviesListByYear = async (page: number = 1) => {
    "use server";
    return getMoviesByYear(params.inputYear, page);
  };
  return (
    <ContentCarousel
      isVertical={true}
      contentType="movie"
      fetchData={getMoviesListByYear}
    />
  );
};

export default MoviesByYearPage;

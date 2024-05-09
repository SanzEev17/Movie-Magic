import ContentCarousel from "@/components/ContentCarousel";
import { getTopRatedTvShows } from "@/actions/getTvShows";
import React from "react";

const TopRatedMoviesPage = () => {
  return (
    <ContentCarousel
      isVertical={true}
      contentType="movie"
      fetchData={getTopRatedTvShows}
    />
  );
};

export default TopRatedMoviesPage;

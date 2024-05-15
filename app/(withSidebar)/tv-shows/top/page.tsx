import ContentCarousel from "@/components/ContentCarousel";
import { getTopRatedTvShows } from "@/actions/getTvShows";
import React from "react";

const TopRatedMoviesPage = () => {
  return (
    <ContentCarousel
      isVertical={true}
      contentType="tv"
      fetchData={getTopRatedTvShows}
    />
  );
};

export default TopRatedMoviesPage;

import ContentCarousel from "@/components/ContentCarousel";
import { getPopularTvShows } from "@/actions/getTvShows";
import React from "react";

const PopularTVShowsPage = async () => {
  return (
    <ContentCarousel
      isVertical={true}
      contentType="movie"
      fetchData={getPopularTvShows}
    />
  );
};

export default PopularTVShowsPage;

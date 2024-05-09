import { getNowAiringTvShows } from "@/actions/getTvShows";
import ContentCarousel from "@/components/ContentCarousel";
import React from "react";

const YearTvShowPage = () => {
  return (
    <ContentCarousel
      isVertical={true}
      contentType="tv"
      fetchData={getNowAiringTvShows}
    />
  );
};

export default YearTvShowPage;

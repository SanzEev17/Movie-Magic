import { getTvShowsByYear } from "@/actions/getTvShows";
import ContentCarousel from "@/components/ContentCarousel";
import React from "react";

const TvShowsByYearPage = ({ params }: { params: { inputYear: string } }) => {
  const getTvShowsListByYear = async (page: number = 1) => {
    "use server";
    return getTvShowsByYear(params.inputYear, page);
  };
  return (
    <ContentCarousel
      isVertical={true}
      contentType="tv"
      fetchData={getTvShowsListByYear}
    />
  );
};

export default TvShowsByYearPage;

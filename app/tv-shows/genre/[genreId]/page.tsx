import { getGenreTvShows } from "@/actions/getTvShows";
import ContentCarousel from "@/components/ContentCarousel";
import React from "react";

const TvShowGenrePage = ({ params }: { params: { genreId: string } }) => {
  const getGenreTvShowList = async (page: number = 1) => {
    "use server";
    return getGenreTvShows(params.genreId, page);
  };
  return (
    <ContentCarousel
      isVertical={true}
      contentType="tv"
      fetchData={getGenreTvShowList}
    />
  );
};

export default TvShowGenrePage;

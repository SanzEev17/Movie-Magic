import { getGenreMovies } from "@/actions/getMovies";
import ContentCarousel from "@/components/ContentCarousel";
import React from "react";

const MovieGenrePage = ({ params }: { params: { genreId: string } }) => {
  const getGenreMoviesList = async(page:number = 1) => {
    "use server"
    return getGenreMovies(params.genreId, page);
  };
  return (
    <ContentCarousel
      isVertical={true}
      contentType="movie"
      fetchData={getGenreMoviesList}
    />
  );
};

export default MovieGenrePage;

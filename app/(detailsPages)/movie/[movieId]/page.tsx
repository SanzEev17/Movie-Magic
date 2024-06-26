import { getMovieById, getRecommendedMovies } from "@/actions/getMovies";
import ContentCarousel from "@/components/ContentCarousel";
import Background from "@/components/MediaDetails/Background";
import CastCarousel from "@/components/MediaDetails/CastCarousel";
import ImageCard from "@/components/MediaDetails/ImageCard";
import MediaContainer from "@/components/MediaDetails/MediaContainer";
import MediaInfo from "@/components/MediaDetails/MediaInfo";
import MediaOverview from "@/components/MediaDetails/MediaOverview";

const MovieDetails = async ({ params }: { params: { movieId: string } }) => {
  const movieDetails = await getMovieById(params.movieId);
  const getSimilarMovies = async (page: number = 1) => {
    "use server";
    return getRecommendedMovies(params.movieId, page);
  };

  const baseImgUrl = "https://image.tmdb.org/t/p/original/";
  const backdropImgUrl = baseImgUrl + movieDetails.backdrop_path;
  const cardImgUrl = baseImgUrl + movieDetails.poster_path;
  
  return (
    <MediaContainer backdropImgUrl={backdropImgUrl} title={movieDetails.title}>
      <div className="relative flex flex-col md:flex-row gap-6">
        <ImageCard imageUrl={cardImgUrl} title={movieDetails.title} />
        <MediaInfo
          id={movieDetails.id}
          title={movieDetails.title}
          genres={movieDetails.genres}
          runtime={movieDetails.runtime}
          releaseDate={movieDetails.release_date}
          rating={movieDetails.vote_average}
          productionCompanies={movieDetails.production_companies}
        />
      </div>
      <MediaOverview mediaOverview={movieDetails.overview} />
      <CastCarousel mediaId={params.movieId} mediaType="movie" />
      <ContentCarousel
        title="You may also like"
        contentType="movie"
        fetchData={getSimilarMovies}
      />
    </MediaContainer>
  );
};

export default MovieDetails;

import { getMovieById } from "@/actions/getMovies";
import Background from "@/components/MediaDetails/Background";
import CastCarousel from "@/components/MediaDetails/CastCarousel";
import ImageCard from "@/components/MediaDetails/ImageCard";
import MediaInfo from "@/components/MediaDetails/MediaInfo";
import MediaOverview from "@/components/MediaDetails/MediaOverview";

const MovieDetails = async ({ params }: { params: { movieId: string } }) => {
  const movieDetails = await getMovieById(params.movieId);

  const baseImgUrl = "https://image.tmdb.org/t/p/original/";
  const backdropImgUrl = baseImgUrl + movieDetails.backdrop_path;
  const cardImgUrl = baseImgUrl + movieDetails.poster_path;
  return (
    <main className="">
      <Background backdropImgUrl={backdropImgUrl} title={movieDetails.title} />
      <div className="px-10 py-5 space-y-5">
        <div className="relative flex gap-6">
          <ImageCard imageUrl={cardImgUrl} title={movieDetails.title} />
          <MediaInfo
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
      </div>
    </main>
  );
};

export default MovieDetails;

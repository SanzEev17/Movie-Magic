import ContentCarousel from "@/components/ContentCarousel";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "@/actions/getMovies";
import {
  getNowAiringTvShows,
  getPopularTvShows,
  getTopRatedTvShows,
} from "@/actions/getTvShows";

export default async function Home() {
  return (
    <div className="py-3">
      <h1 className="text-3xl font-semibold">Explore Movies and TV Shows</h1>
      <div className="py-4">
        <ContentCarousel
          title="Now playing movies"
          contentType="movie"
          fetchData={getNowPlayingMovies}
        />
        <ContentCarousel
          title="Popular movies"
          contentType="movie"
          fetchData={getPopularMovies}
        />
        <ContentCarousel
          title="Top rated movies"
          contentType="movie"
          fetchData={getTopRatedMovies}
        />
      </div>
      <div className="py-4">
        <ContentCarousel
          title="Now airing TV shows"
          contentType="tv"
          fetchData={getNowAiringTvShows}
        />
        <ContentCarousel
          title="Popular TV shows"
          contentType="tv"
          fetchData={getPopularTvShows}
        />
        <ContentCarousel
          title="Top rated TV shows"
          contentType="tv"
          fetchData={getTopRatedTvShows}
        />
      </div>
    </div>
  );
}

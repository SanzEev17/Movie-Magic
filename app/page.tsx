import HomeInfoCard from "@/components/HomeInfoCard";
import MovieCarousel from "@/components/Movie/MovieCarousel";
import TVShowCarousel from "@/components/TVShow/TVShowCarousel";
import {
  getNowAiringTvShows,
  getNowPlayingMovies,
  getTrendingMovies,
  getTrendingTvShows,
} from "@/lib/getMovieShow";

export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies();
  const trendingMovies = await getTrendingMovies();
  const nowAiringShows = await getNowAiringTvShows();
  const trendingShows = await getTrendingTvShows();

  return (
    <main className="flex-1 py-3">
      <h1 className="text-3xl font-semibold">Explore</h1>
      <div className="py-5 grid grid-cols-3 space-x-4">
        <HomeInfoCard
          title="Keep track of all the movies you want to watch"
          description="All the info are here"
          className="col-span-3 lg:col-span-2"
        />
        <HomeInfoCard
          title="Be updated what's happening!"
          description="Feel free to surf"
          className="col-span-1 hidden lg:block"
        />
      </div>
      <div>
        <MovieCarousel title="Trending movies" data={trendingMovies} />
        <MovieCarousel title="Now playing movies" data={nowPlayingMovies} />
      </div>
      <div className="py-5">
        <HomeInfoCard
          title="Keep tabs on every series you're itching to see!"
          description="Here are some recommendations."
        />
      </div>
      <div>
        <TVShowCarousel title="Trending TV shows" data={trendingShows} />
        <TVShowCarousel title="Now airing TV shows" data={nowAiringShows} />
      </div>
    </main>
  );
}

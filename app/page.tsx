import HomeInfoCard from "@/components/HomeInfoCard";
import MovieShowCarousel from "@/components/MovieShowCarousel";
import { getNowPlayingMovies, getTrendingMovies, getUpcomingMovies } from "@/lib/getMovieShow";

export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies() 
  const trendingMovies = await getTrendingMovies()
  const upcomingMovies = await getUpcomingMovies()

  return (
    <main className="flex-1 py-3">
      <h1 className="text-3xl font-semibold">Explore</h1>
      <div className="text-white h-64 md:h-72 py-5 grid grid-cols-3 space-x-4">
        <HomeInfoCard
          title="Keep track of all the movies and tv shows you want to watch"
          description="All the info are here"
          className="col-span-3 lg:col-span-2"
        />
        <HomeInfoCard
          title="Keep updated what's happening!"
          description="Feel free to surf"
          className="col-span-1 hidden lg:block"
        />
      </div>
      <MovieShowCarousel
        title="Trending movies"
        data={trendingMovies}
      />
      <MovieShowCarousel
        title="Now playing movies"
        data={nowPlayingMovies}
      />
      <MovieShowCarousel
        title="Upcoming movies"
        data={upcomingMovies}
      />
    </main>
  );
}

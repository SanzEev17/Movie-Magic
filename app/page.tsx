import HomeInfoCard from "@/components/HomeInfoCard";
import ContentCarousel from "@/components/ContentCarousel";
import { getNowPlayingMovies, getPopularMovies } from "@/actions/getMovies";
import { getNowAiringTvShows, getPopularTvShows } from "@/actions/getTvShows";

export default async function Home() {
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
        <ContentCarousel
          title="Popular movies"
          contentType="movie"
          fetchData={getPopularMovies}
        />
        <ContentCarousel
          title="Now playing movies"
          contentType="movie"
          fetchData={getNowPlayingMovies}
        />
      </div>
      <div className="py-5">
        <HomeInfoCard
          title="Keep tabs on every series you're itching to see!"
          description="Here are some recommendations."
        />
      </div>
      <div>
        <ContentCarousel
          title="Popular TV shows"
          contentType="tv"
          fetchData={getPopularTvShows}
        />
        <ContentCarousel
          title="Now airing TV shows"
          contentType="tv"
          fetchData={getNowAiringTvShows}
        />
      </div>
    </main>
  );
}

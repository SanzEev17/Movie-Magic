import { getTvShowById } from "@/actions/getTvShows";
import Background from "@/components/MediaDetails/Background";
import CastCarousel from "@/components/MediaDetails/CastCarousel";
import ImageCard from "@/components/MediaDetails/ImageCard";
import MediaInfo from "@/components/MediaDetails/MediaInfo";
import MediaOverview from "@/components/MediaDetails/MediaOverview";

const TvShowDetails = async ({ params }: { params: { tvShowId: string } }) => {
  const tvShowDetails = await getTvShowById(params.tvShowId);

  const baseImgUrl = "https://image.tmdb.org/t/p/original/";
  const backdropImgUrl = baseImgUrl + tvShowDetails.backdrop_path;
  const cardImgUrl = baseImgUrl + tvShowDetails.poster_path;
  return (
    <main className="">
      <Background backdropImgUrl={backdropImgUrl} title={tvShowDetails.name} />
      <div className="px-10 py-5 space-y-5">
        <div className="relative flex gap-6">
          <ImageCard imageUrl={cardImgUrl} title={tvShowDetails.name} />
          <MediaInfo
            title={tvShowDetails.name}
            genres={tvShowDetails.genres}
            releaseDate={tvShowDetails.first_air_date}
            rating={tvShowDetails.vote_average}
            productionCompanies={tvShowDetails.production_companies}
          />
        </div>
        <MediaOverview mediaOverview={tvShowDetails.overview} />
        <CastCarousel mediaId={params.tvShowId} mediaType="tv" />
      </div>
    </main>
  );
};

export default TvShowDetails;

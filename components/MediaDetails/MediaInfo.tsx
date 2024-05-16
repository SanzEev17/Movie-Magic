import { Genre, ProductionCompany } from "@/typings";
import { Dot, Star } from "lucide-react";
import React from "react";
import MediaGenres from "./MediaGenres";
import MediaProductionCompanies from "./MediaProductionCompanies";
import TvSeasonsButton from "./TvSeasonsButton";

type MediaInfoProps = {
  id: number;
  title: string;
  genres: Genre[];
  runtime?: number;
  episodes?: number;
  seasons?: number;
  releaseDate: string;
  tvShowStatus?: string;
  tvShowEndedAt?: string;
  rating: number;
  productionCompanies: ProductionCompany[];
};

const MediaInfo = ({
  id,
  title,
  genres,
  runtime,
  episodes,
  seasons,
  releaseDate,
  tvShowStatus,
  tvShowEndedAt,
  rating,
  productionCompanies,
}: MediaInfoProps) => {
  const hours = runtime ? Math.floor(runtime / 60) : "";
  const minutes = runtime ? runtime % 60 : "";

  return (
    <div className="text-[10px] md:text-xs flex flex-col gap-2">
      {/* Media Title  */}
      <h1 className="text-2xl md:text-4xl font-bold text-primary">{title}</h1>
      <div className="flex items-center gap-3 font-medium">
        {/* List of genres  */}
        {genres.map((genre) => (
          <MediaGenres
            key={genre.id}
            genreId={genre.id}
            genreName={genre.name}
          />
        ))}
      </div>

      <div className="md:text-sm flex items-center gap-1 text-muted font-medium">
        {/* Total runtime of movie  */}
        {runtime && (
          <span className="flex items-center gap-1">
            <span>{`${hours}h ${minutes}min`}</span>
            <Dot />
          </span>
        )}
        {/* If tv show, no. of episodes and seasons  */}
        {episodes && seasons && (
          <span className="flex items-center gap-1">
            <span>{`${episodes} episodes, ${seasons} seasons`}</span>
            <Dot />
          </span>
        )}
        {/* Tv show status i.e running or ended */}
        {tvShowStatus && (
          <span className="flex items-center gap-1">
            <span>{tvShowStatus}</span>
            <Dot />
          </span>
        )}
        {/* Release date or first air date */}
        <span className="flex items-center gap-1">
          <span>
            {releaseDate.split("-")[0]}
            {/* If tv show and status is ended */}
            {tvShowEndedAt && tvShowStatus === "Ended" && (
              <span> - {tvShowEndedAt.split("-")[0]}</span>
            )}
          </span>
          <Dot />
        </span>
        {/* Rating of movie or tv show  */}
        <span className="flex items-center">
          <Star size={14} fill="#facc15" className="text-yellow-400" />
          &nbsp;
          {rating.toFixed(1)}
        </span>
      </div>

      <MediaProductionCompanies productionCompanies={productionCompanies} />

      {seasons && episodes && (
        //* It will be visible only in tv shows
        <TvSeasonsButton tvShowId={id} />
      )}
    </div>
  );
};

export default MediaInfo;

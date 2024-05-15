import { Genre, ProductionCompany } from "@/typings";
import { ArrowRight, Dot, Star } from "lucide-react";
import Link from "next/link";
import React from "react";
import { MotionDiv } from "../MotionDiv";

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
    <div className="flex flex-col gap-2">
      {/* Media Title  */}
      <h1 className="text-4xl font-bold text-primary">{title}</h1>
      <div className="flex items-center gap-3 font-medium">
        {/* List of genres  */}
        {genres.map((genre) => (
          <Link
            key={genre.id}
            href={`/movies/genre/${genre.id}`}
            className="text-xs px-3 py-1 border border-primary rounded-md"
          >
            {genre.name}
          </Link>
        ))}
      </div>
      <div className="text-sm flex items-center gap-1 text-muted font-medium">
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
      {/* Production companies  */}
      <div className="text-sm">
        <span className="font-medium">Production: </span>
        {productionCompanies.map((company, index) => (
          <span key={company.id}>
            {company.name}
            <span>{index !== productionCompanies.length - 1 && ", "}</span>
          </span>
        ))}
      </div>
      {seasons && episodes && (
        //* It will be visible only in tv shows
        <Link href={`/tv/${id}/season/1`} className="w-fit">
          <MotionDiv
            whileHover={{
              backgroundColor: "var(--tabs-background)",
              color: "var(--tabs)",
              scale: 1.08,
            }}
            whileTap={{ scale: 0.8 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="border border-primary flex items-center justify-center gap-2 px-4 py-2 text-xs rounded-xl"
          >
            <span className="font-semibold">Seasons</span>
            <ArrowRight size={12} />
          </MotionDiv>
        </Link>
      )}
    </div>
  );
};

export default MediaInfo;

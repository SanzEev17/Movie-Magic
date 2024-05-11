import { Genre, ProductionCompany } from "@/typings";
import { Dot, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

type MediaInfoProps = {
  title: string;
  genres: Genre[];
  runtime: number;
  releaseDate: string;
  rating: number;
  productionCompanies: ProductionCompany[];
};

const MediaInfo = ({
  title,
  genres,
  runtime,
  releaseDate,
  rating,
  productionCompanies,
}: MediaInfoProps) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold text-zinc-900">{title}</h1>
      <div className="flex items-center gap-3 font-medium">
        {genres.map((genre) => (
          <Link
            key={genre.id}
            href={`/movies/genre/${genre.id}`}
            className="text-xs px-3 py-1 border border-black rounded-md"
          >
            {genre.name}
          </Link>
        ))}
      </div>

      <div className="text-sm flex items-center gap-1 text-gray-500 font-medium">
        <span>
          {hours && `${hours}h`} {minutes && `${minutes}min`}
        </span>
        <Dot />
        <span>{releaseDate.split("-")[0]}</span>
        <Dot />
        <span className="flex items-center">
          <Star size={14} fill="#facc15" className="text-yellow-400" />
          &nbsp;
          {rating.toFixed(1)}
        </span>
      </div>

      <div className="text-sm">
        <span className="font-medium">Production: </span>
        {productionCompanies.map((company, index) => (
          <span key={company.id}>
            {company.name}
            <span>{index !== productionCompanies.length - 1 && ", "}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MediaInfo;

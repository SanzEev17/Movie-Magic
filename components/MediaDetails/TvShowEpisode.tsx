import { TVSeasonEpisode } from "@/typings";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const TvShowEpisode = ({ episodeData }: { episodeData: TVSeasonEpisode }) => {
  const hours = episodeData.runtime ? Math.floor(episodeData.runtime / 60) : "";
  const minutes = episodeData.runtime ? episodeData.runtime % 60 : "";
  const imageUrl = `https://image.tmdb.org/t/p/original/${episodeData.still_path}`;

  return (
    <div className="max-h-48 flex flex-col md:flex-row col-span-2 md:col-span-1 gap-2 border border-border rounded-xl">
      <div className="relative h-48 min-w-48 rounded-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={episodeData.name}
          fill
          sizes="(max-width: 768px) 30vw, (max-width: 1024px) 20vw, 15vw"
          quality={50}
          className="object-cover"
        />
      </div>
      <div className="py-3 px-5 space-y-2">
        <h1 className="font-semibold text-xl">
          <span>{episodeData.episode_number}.&nbsp;</span>
          <span>{episodeData.name}</span>
        </h1>
        <div className="flex gap-1 text-muted text-sm font-medium">
          <span className="">
            {hours ? `${hours}h ` : ""}
            {minutes ? `${minutes}min` : ""}
          </span>
          <span>&#45;</span>
          <span className="flex items-center">
            <Star size={14} fill="#facc15" className="text-yellow-400" />
            &nbsp;
            {episodeData.vote_average.toFixed(1)}
          </span>
        </div>
        <p className="text-muted text-sm font-medium line-clamp-4">
          {episodeData.overview}
        </p>
      </div>
    </div>
  );
};

export default TvShowEpisode;

import { getTvSeason } from "@/actions/getTvShows";
import TvShowEpisode from "@/components/MediaDetails/TvShowEpisode";
import Image from "next/image";
import React from "react";

const TvSeasonEpisodeList = async ({
  params,
}: {
  params: { tvShowId: string; seasonId: string };
}) => {
  const { tvShowId, seasonId } = params;
  const tvSeasonDetails = await getTvSeason(tvShowId, seasonId);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Season {seasonId}</h1>
      <div className="grid grid-cols-2 gap-6">
        {tvSeasonDetails.map((episode) => (
          <TvShowEpisode key={episode.id} episodeData={episode} /> 
        ))}
      </div>
    </div>
  );
};

export default TvSeasonEpisodeList;

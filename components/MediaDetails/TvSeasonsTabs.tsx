"use client";
import { TVShowSeasons } from "@/typings";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const TvSeasonsTabs = ({ seasons }: { seasons: TVShowSeasons[] }) => {
  const pathname = usePathname();
  const basePathname = pathname.split("/").slice(0, -1).join("/");
  const {seasonId} = useParams()
  
  return (
    <div className="flex gap-2">
      {seasons.map((season) => (
        <Link
          key={season.id}
          href={`${basePathname}/${season.season_number}`}
          className={`${
            seasonId === season.season_number.toString()
              ? "bg-tabs-background text-tabs"
              : ""
          } flex justify-center items-center size-7 text-sm rounded-lg border border-primary hover:bg-tabs-background hover:text-tabs`}
        >
          {season.season_number}
        </Link>
      ))}
    </div>
  );
};

export default TvSeasonsTabs;

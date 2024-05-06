import React from "react";
import Badge from "../Badge";
import { TVShow } from "@/typings";
import Image from "next/image";
import { Star } from "lucide-react";

const TVShowCard = async ({ tvShowData }: { tvShowData: TVShow }) => {
  const averageRating = tvShowData.vote_average.toFixed(1);
  const imageUrl = `https://image.tmdb.org/t/p/original/${tvShowData.poster_path}`;

  const releaseYear = tvShowData.first_air_date.split("-")[0];

  return (
    <div className="min-w-44 h-64 rounded-xl shadow-custom overflow-hidden">
      <div className=" w-full h-full relative">
        <Image
          src={imageUrl}
          alt={tvShowData.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 10vw"
          quality={80}
          className="object-cover"
        />
        <div className="p-2 w-full absolute flex justify-between">
          <Badge Icon={Star} iconFill="yellow" text={averageRating} />
          <Badge text={releaseYear} />
        </div>
      </div>
    </div>
  );
};

export default TVShowCard;

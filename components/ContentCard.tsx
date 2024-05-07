import React, { Suspense } from "react";
import Badge from "./Badge";
import { TVShow, Movie } from "@/typings";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

type ContentCardProps = {
  data: TVShow | Movie;
  contentType: "movie" | "tv" | "people";
};

const ContentCard = ({ data, contentType }: ContentCardProps) => {
  const averageRating = data.vote_average.toFixed(1);
  const imageUrl = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
  const releaseYear =
    "release_date" in data
      ? data.release_date.split("-")[0]
      : data.first_air_date.split("-")[0];
  const title = "name" in data ? data.name : data.title;

  return (
    <Link
      href={`${contentType}/${data.id}`}
      className="min-w-44 h-64 rounded-xl shadow-custom overflow-hidden"
    >
      <div className=" w-full h-full relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 20vw, (max-width: 1024px) 15vw, 10vw"
          quality={60}
          className="object-cover"
        />
        <div className="p-2 w-full absolute flex justify-between">
          <Badge Icon={Star} iconFill="yellow" text={averageRating} />
          <Badge text={releaseYear} />
        </div>
      </div>
    </Link>
  );
};

export default ContentCard;

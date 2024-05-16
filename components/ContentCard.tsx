import React from "react";
import Badge from "./Badge";
import { TVShow, Movie, SearchResults, Person } from "@/typings";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "./MotionDiv";
import { cardVariant } from "@/variants/variants";

type ContentCardProps = {
  data: TVShow | Movie | Person | SearchResults;
  contentType: "movie" | "tv" | "person" | "all";
};

const ContentCard = ({ data, contentType }: ContentCardProps) => {
  const averageRating =
    "vote_average" in data ? data.vote_average.toFixed(1) : null;

  const imageUrl = `https://image.tmdb.org/t/p/original/${
    "profile_path" in data ? data.profile_path : data.poster_path
  }`;

  const releaseYear =
    "release_date" in data
      ? data.release_date.split("-")[0]
      : "first_air_date" in data
      ? data.first_air_date.split("-")[0]
      : null;
  const title = "name" in data ? data.name : data.title;

  //* Url to redirect
  const baseUrl =
    contentType === "all" && "media_type" in data
      ? data.media_type
      : contentType;

  return (
    <div className="space-y-3">
      <MotionDiv
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        whileTap="click"
        transition={{ ease: "easeInOut", duration: 0.4 }}
        viewport={{ once: true }}
        className="min-w-44 h-64 rounded-xl overflow-hidden shadow-lg"
      >
        <Link href={`/${baseUrl}/${data.id}`} className="w-full h-full">
          <div className="w-full h-full relative">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 20vw, (max-width: 1024px) 15vw, 10vw"
              quality={50}
              className="object-cover"
            />
            <div className="p-2 w-full absolute flex justify-between">
              {averageRating && (
                <Badge Icon={Star} iconFill="yellow" text={averageRating} />
              )}
              {releaseYear && <Badge text={releaseYear} />}
            </div>
          </div>
        </Link>
      </MotionDiv>
      <h1 className="text-sm font-semibold text-ellipsis line-clamp-2">
        {title}
      </h1>
    </div>
  );
};

export default ContentCard;

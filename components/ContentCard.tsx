import React from "react";
import Badge from "./Badge";
import { TVShow, Movie } from "@/typings";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "./MotionDiv";
import { cardVariant } from "@/variants/variants";

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
    <MotionDiv
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap="click"
      transition={{ ease: "easeInOut", duration: 0.4 }}
      viewport={{ once: true }}
      className="min-w-44 h-64 rounded-xl shadow-custom overflow-hidden"
    >
      <Link href={`/${contentType}/${data.id}`} className="w-full h-full">
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
            <Badge Icon={Star} iconFill="yellow" text={averageRating} />
            <Badge text={releaseYear} />
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
};

export default ContentCard;

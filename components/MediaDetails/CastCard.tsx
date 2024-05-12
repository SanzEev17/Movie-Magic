import React from "react";
import { MotionDiv } from "../MotionDiv";
import { cardVariant } from "@/variants/variants";
import Link from "next/link";
import Image from "next/image";
import { Cast } from "@/typings";

const CastCard = ({ castData }: { castData: Cast }) => {
  const { name, profile_path, character } = castData;
  const imageUrl = `https://image.tmdb.org/t/p/original/${profile_path}`;

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
        className="min-w-44 h-60 rounded-xl overflow-hidden shadow-lg"
      >
        <Link href={`/person/${castData.id}`} className="w-full h-full">
          <div className="w-full h-full relative">
            <Image
              src={imageUrl}
              alt={name}
              fill
              sizes="(max-width: 768px) 20vw, (max-width: 1024px) 15vw, 10vw"
              quality={50}
              className="object-cover"
            />
          </div>
        </Link>
      </MotionDiv>
      <div>
        <h1 className="text-sm font-semibold">{name}</h1>
        <p className="text-xs text-muted">{character}</p>
      </div>
    </div>
  );
};

export default CastCard;

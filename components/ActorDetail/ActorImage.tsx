import React from "react";
import { MotionDiv } from "../MotionDiv";
import { cardVariant } from "@/variants/variants";
import Image from "next/image";

const ActorImage = ({
  profileUrl,
  actorsName,
}: {
  profileUrl: string;
  actorsName: string;
}) => {
  const imageUrl = `https://image.tmdb.org/t/p/original/${profileUrl}`;
  return (
    <MotionDiv
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap="click"
      transition={{ ease: "easeInOut", duration: 0.4 }}
      viewport={{ once: true }}
      className="w-64 h-96 rounded-xl shadow-custom overflow-hidden"
    >
      <div className="w-full h-full relative">
        <Image
          src={imageUrl}
          alt={actorsName}
          fill
          sizes="(max-width: 768px) 20vw, (max-width: 1024px) 15vw, 10vw"
          quality={50}
          className="object-cover"
        />
      </div>
    </MotionDiv>
  );
};

export default ActorImage;

import Image from "next/image";
import React from "react";

const Background = ({
  backdropImgUrl,
  title,
}: {
  backdropImgUrl: string;
  title: string;
}) => {
  return (
    <div className="h-[60vh] md:h-[80vh] relative">
      <Image
        src={backdropImgUrl}
        alt={title}
        fill
        quality={50}
        sizes="(max-width: 1024px) 50vw, (min-width: 1024px) 60vw"
        style={{ objectFit: "cover", objectPosition: "center top" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0] to-black"></div>
      <div className="bg-background h-5 w-full absolute bottom-0 rounded-t-3xl"></div>
    </div>
  );
};

export default Background;

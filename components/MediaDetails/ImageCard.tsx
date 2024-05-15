import Image from "next/image";
import React from "react";

const ImageCard = ({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) => {
  return (
    <div className="w-fit h-fit -mt-28 rounded-3xl overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        height={230}
        width={190}
        quality={50}
        className="object-cover"
      />
    </div>
  );
};

export default ImageCard;

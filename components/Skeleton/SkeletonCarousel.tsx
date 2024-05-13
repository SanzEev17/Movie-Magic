import React from "react";
import SkeletonCard from "./SkeletonCard";

const SkeletonCarousel = ({ isVertical }: { isVertical?: boolean }) => {
  const data = [];
  for (let i = 1; i <= 20; i++) {
    data.push(i);
  }
  return (
    <div className="py-2">
      <h1 className="text-2xl font-medium"></h1>
      <div
        className={`${
          isVertical
            ? "grid grid-cols-card gap-5"
            : "flex overflow-x-scroll space-x-5"
        } w-full py-4  no-scrollbar`}
      >
        {data.map((item) => (
          <SkeletonCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonCarousel;

import React from "react";

const SkeletonCard = () => {
  return (
    <div className="min-w-44 h-64 animate-pulse rounded-xl overflow-hidden">
      <div className="w-full h-full relative bg-gray-800/20">
      </div>
    </div>
  );
};

export default SkeletonCard;

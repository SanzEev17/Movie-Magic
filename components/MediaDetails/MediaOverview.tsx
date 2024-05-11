import React from "react";

const MediaOverview = ({ mediaOverview }: { mediaOverview: string }) => {
  return (
    <div className="py-2 space-y-2">
      <h1 className="text-lg font-semibold">Overview</h1>
      <p className="text-sm text-gray-500 font-medium">{mediaOverview}</p>
    </div>
  );
};

export default MediaOverview;

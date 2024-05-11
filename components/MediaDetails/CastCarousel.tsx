import React from "react";
import CastCard from "./CastCard";
import { getCasts } from "@/actions/getCasts";

const CastCarousel = async ({
  mediaId,
  mediaType,
}: {
  mediaId: string;
  mediaType: "movie" | "tv";
}) => {
  const casts = await getCasts(mediaId, mediaType);
  const actingCasts = casts.filter(
    (cast) => cast.known_for_department === "Acting"
  );

  return (
    <div className="py-2">
      <h1 className="text-lg font-semibold">Cast</h1>
      <div className="flex overflow-x-scroll gap-4 w-full py-4  no-scrollbar">
        {actingCasts.map((castData) => (
          <CastCard key={castData.cast_id} castData={castData} />
        ))}
      </div>
    </div>
  );
};

export default CastCarousel;

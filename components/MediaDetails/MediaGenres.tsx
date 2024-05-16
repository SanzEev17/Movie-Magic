import Link from "next/link";
import React from "react";

const MediaGenres = ({
  genreId,
  genreName,
}: {
  genreId: number;
  genreName: string;
}) => {
  return (
    <Link
      key={genreId}
      href={`/movies/genre/${genreId}`}
      className="px-3 py-1 border border-primary rounded-md"
    >
      {genreName}
    </Link>
  );
};

export default MediaGenres;

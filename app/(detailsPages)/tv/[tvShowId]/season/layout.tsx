import { getTvShowById } from "@/actions/getTvShows";
import TvSeasonsTabs from "@/components/MediaDetails/TvSeasonsTabs";
import React from "react";

const TVSeasonLayout = async ({
  children,
  params,
}: {
  children: Readonly<React.ReactNode>;
  params: { tvShowId: string };
}) => {
  const tvShowDetails = await getTvShowById(params.tvShowId);
  return (
    <section className="my-16 md:my-20 px-8 md:px-14 py-12">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold">{tvShowDetails.name}</h1>
        <TvSeasonsTabs seasons={tvShowDetails.seasons} />
      </div>
      <div className="py-8">{children}</div>
    </section>
  );
};

export default TVSeasonLayout;

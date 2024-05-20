import { getTvShowById } from "@/actions/getTvShows";
import TvSeasonsTabs from "@/components/MediaDetails/TvSeasonsTabs";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
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
    <section className="mt-16 md:mt-20 px-8 md:px-14 py-6 md:py-12">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Link href={`/tv/${params.tvShowId}`}>
            <ChevronLeft size={25} />
          </Link>
          <h1 className="text-4xl font-bold">{tvShowDetails.name}</h1>
        </div>
        <TvSeasonsTabs seasons={tvShowDetails.seasons} />
      </div>
      <div className="py-8">{children}</div>
    </section>
  );
};

export default TVSeasonLayout;

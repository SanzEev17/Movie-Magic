import { getSearchResults } from "@/actions/getSearch";
import { getPopularTvShows } from "@/actions/getTvShows";
import ContentCarousel from "@/components/ContentCarousel";
import React from "react";

const SearchResultsPage = ({
  searchParams,
}: {
  searchParams: { query: string };
}) => {
  const getSearchData = async (page: number = 1) => {
    "use server";
    return await getSearchResults(searchParams.query, page);
  };
  return (
    <div>
      <h1 className="text-4xl font-semibold">
        Search results for {searchParams.query}
      </h1>
      {searchParams.query ? (
        <ContentCarousel
          isVertical={true}
          contentType="all"
          fetchData={getSearchData}
        />
      ) : (
        <div className="py-3 font-medium">No results found</div>
      )}
    </div>
  );
};

export default SearchResultsPage;

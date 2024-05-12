"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const SearchInput = ({
  baseUrl,
  defaultValue,
  searchType,
}: {
  baseUrl: string;
  defaultValue?: string;
  searchType?: string;
}) => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState(defaultValue || "");
  const [query] = useDebounce(searchInput, 500);

  useEffect(() => {
    if (query) {
      searchType
        ? router.push(`${baseUrl}?${searchType}=${query}`)
        : router.push(`${baseUrl}/${query}`);
    }
  }, [query, router, baseUrl, searchType]);

  return (
    <div className="w-full md:max-w-80 relative text-sm">
      <input
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        placeholder="Search"
        className="w-full bg-input-background ps-4 pe-8 py-2 rounded-md placeholder:text-input placeholder:font-semibold"
      />
      <div className="absolute right-0 top-0 p-2 ">
        <Search size={20} strokeWidth={3} />
      </div>
    </div>
  );
};

export default SearchInput;

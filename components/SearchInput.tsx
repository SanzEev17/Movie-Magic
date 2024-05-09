"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchInput = ({ defaultValue }: { defaultValue?: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  //* This is the baseUrl for router to push
  const matchResult: RegExpMatchArray | null = pathname.match(
    /^\/[^\/]+\/[^\/]+/
  );
  const baseUrl: string | null = matchResult ? matchResult[0] : "";

  const [searchInput, setSearchInput] = useState(defaultValue || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    router.push(`${baseUrl}/${inputValue}`);
  };

  return (
    <div className="w-full md:max-w-80 relative text-sm">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        value={searchInput}
        placeholder="Search"
        className="w-full bg-zinc-100 ps-4 pe-8 py-2 rounded-md placeholder:text-zinc-800 placeholder:font-semibold"
      />
      <div className="absolute right-0 top-0 p-2 ">
        <Search size={20} strokeWidth={3} />
      </div>
    </div>
  );
};

export default SearchInput;

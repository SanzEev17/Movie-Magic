"use client";
import SearchInput from "@/components/SearchInput";
import { usePathname } from "next/navigation";
import React from "react";

const YearTvShowsLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const data = pathname.split("/").slice(-1)[0];
  const year = data !== "year" ? data : ""

  return (
    <section className="py-2">
      <div className="flex items-center space-x-3">
        <h1 className="font-semibold">Year: </h1>
        <SearchInput defaultValue={year} />
      </div>
      {children}
    </section>
  );
};

export default YearTvShowsLayout;

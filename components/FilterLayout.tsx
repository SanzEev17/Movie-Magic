"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const filterList = [
  { name: "Popular", slug: "popular" },
  { name: "Top", slug: "top" },
  { name: "Genre", slug: "genre" },
  { name: "Year", slug: "year" },
];

const FilterLayout = ({
  title,
  contentType,
  children,
}: {
  title: string;
  contentType: "movies" | "tv-shows";
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const currentPath = pathname.split("/")[2];

  return (
    <section className="py-3">
      <h1 className="py-3 text-3xl font-semibold">Browse {title}</h1>
      <div className="py-3 flex gap-3 text-xs font-semibold">
        {filterList.map((item, index) => (
          <Link
            href={`/${contentType}/${item.slug}`}
            key={index}
            className={`${
              currentPath === item.slug ? "text-tabs bg-tabs-background" : ""
            } px-3 py-1.5 border border-primary rounded-md hover:text-tabs hover:bg-tabs-background`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      {children}
    </section>
  );
};

export default FilterLayout;

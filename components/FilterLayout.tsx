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
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const currentPath = pathname.split("/").slice(-1)[0];

  return (
    <section className="py-3">
      <h1 className="py-3 text-3xl font-semibold">Explore {title}</h1>
      <div className="py-3 flex gap-3 text-xs font-semibold">
        {filterList.map((item, index) => (
          <Link
            href={item.slug}
            key={index}
            className={`${
              currentPath === item.slug ? "text-white bg-black" : ""
            } px-3 py-1.5 border border-black rounded-md hover:text-white hover:bg-black`}
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

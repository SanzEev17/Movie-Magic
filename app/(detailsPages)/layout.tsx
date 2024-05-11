"use client";
import SearchInput from "@/components/SearchInput";
import { motion } from "framer-motion";
import { ChevronLeft, Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <main>
      <header className="w-full px-4 md:px-8 py-5 fixed top-0 z-10 h-16 md:h-20 flex justify-between md:justify-start items-center gap-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
          className="cursor-pointer"
        >
          {isSearchOpen ? (
            <ChevronLeft size={25} onClick={toggleSearch} />
          ) : (
            <ChevronLeft size={25} onClick={() => router.back()} />
          )}
        </motion.div>
        <div
          className={`${
            isSearchOpen ? "block" : "hidden"
          } w-full md:block md:max-w-80`}
        >
          <SearchInput
            baseUrl="/search"
            searchType="query"
          />
        </div>
        <div
          className={`${isSearchOpen ? "hidden" : ""} md:hidden cursor-pointer`}
          onClick={toggleSearch}
        >
          <Search size={20} />
        </div>
      </header>
      {children}
    </main>
  );
}

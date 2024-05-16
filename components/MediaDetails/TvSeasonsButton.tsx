import Link from "next/link";
import React from "react";
import { MotionDiv } from "../MotionDiv";
import { ArrowRight } from "lucide-react";

const TvSeasonsButton = ({tvShowId}:{tvShowId:number}) => {
  return (
    <Link href={`/tv/${tvShowId}/season/1`} className="w-fit">
      <MotionDiv
        whileHover={{
          backgroundColor: "var(--tabs-background)",
          color: "var(--tabs)",
          scale: 1.08,
        }}
        whileTap={{ scale: 0.8 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="border border-primary flex items-center justify-center gap-2 px-4 py-2 text-xs rounded-xl"
      >
        <span className="font-semibold">Seasons</span>
        <ArrowRight size={12} />
      </MotionDiv>
    </Link>
  );
};

export default TvSeasonsButton;

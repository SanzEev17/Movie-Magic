import React from "react";
import { MotionDiv } from "./MotionDiv";

type InfoCardProps = {
  title: string;
  description?: string;
  className?: string;
};

const HomeInfoCard = ({ title, description, className }: InfoCardProps) => {
  return (
    <div className={`${className} h-64`}>
      <MotionDiv
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        viewport={{ once: true }}
        className="p-5 h-full w-full text-white bg-gradient-to-br from-[#2A0845] to-[#6441A5]  flex flex-col justify-between rounded-3xl"
      >
        <h1 className="max-w-sm font-semibold text-2xl">{title}</h1>
        <div>
          <p>{description}</p>
        </div>
      </MotionDiv>
    </div>
  );
};

export default HomeInfoCard;

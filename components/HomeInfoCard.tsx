import React from "react";

type InfoCardProps = {
  title: string;
  description?: string;
  className?: string;
};

const HomeInfoCard = ({ title, description, className }: InfoCardProps) => {
  return (
    <div
      className={`${className} bg-gradient-to-br from-[#2A0845] to-[#6441A5] p-5 rounded-3xl`}
    >
      <div className="h-full max-w-sm flex flex-col justify-between">
        <h1 className="font-semibold text-2xl">{title}</h1>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeInfoCard;

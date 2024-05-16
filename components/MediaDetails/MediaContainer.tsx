import React from "react";
import Background from "./Background";

const MediaContainer = ({
  children,
  backdropImgUrl,
  title,
}: {
  children: React.ReactNode;
  backdropImgUrl: string;
  title: string;
}) => {
  return (
    <main>
      <Background backdropImgUrl={backdropImgUrl} title={title} />
      <div className="px-5 md:px-10 py-5 space-y-5">{children}</div>
    </main>
  );
};

export default MediaContainer;

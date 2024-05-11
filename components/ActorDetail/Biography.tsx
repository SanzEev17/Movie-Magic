import React from "react";

const Biography = ({ actorsBiography }: { actorsBiography: string }) => {
  return (
    <div className="py-2 space-y-2">
      <h2 className="text-2xl font-semibold">Biography</h2>
      <p className="font-medium text-sm">{actorsBiography}</p>
    </div>
  );
};

export default Biography;

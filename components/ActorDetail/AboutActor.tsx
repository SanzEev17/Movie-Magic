import React from "react";

type AboutProps = {
  gender: number;
  place_of_birth: string;
  birthday: string;
  deathday: string | null;
  popularity: number;
  homepage: string | null;
};

const AboutActor = ({
  gender,
  place_of_birth,
  birthday,
  deathday,
  popularity,
  homepage,
}: AboutProps) => {
  const genders = ["Not set / not specified", "Female", "Male", "Non-binary"];

  return (
    <div className="space-y-2">
      <div>
        <span className="font-semibold">Gender: </span>
        <span>{genders[gender]}</span>
      </div>
      <div>
        <span className="font-semibold">Place of birth: </span>
        <span>{place_of_birth}</span>
      </div>
      <div>
        <span className="font-semibold">Date of birth: </span>
        <span>{birthday}</span>
      </div>
      {deathday && (
        <div>
          <span className="font-semibold">Died on: </span>
          <span>{deathday}</span>
        </div>
      )}
      <div>
        <span className="font-semibold">Popularity: </span>
        <span>{popularity}</span>
      </div>
      {homepage && (
        <div>
          <span className="font-semibold">Homepage: </span>
          <a href={homepage} target="_blank" className="hover:text-blue-500">
            {homepage}
          </a>
        </div>
      )}
    </div>
  );
};

export default AboutActor;

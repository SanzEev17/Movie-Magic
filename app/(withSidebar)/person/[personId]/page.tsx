import { getActorsDetail, getActorsMovie, getActorsTvShows } from "@/actions/getActorsDetail";
import ContentCarousel from "@/components/ContentCarousel";
import { MotionDiv } from "@/components/MotionDiv";
import { cardVariant } from "@/variants/variants";
import Image from "next/image";
import React from "react";

const PersonPage = async ({ params }: { params: { personId: string } }) => {
  const actorsData = await getActorsDetail(params.personId);
  const getActorsMoviesList = async (page: number = 1) => {
    "use server";
    return getActorsMovie(params.personId, page);
  };
  const getActorsTvShowsList = async (page: number = 1) => {
    "use server";
    return getActorsTvShows(params.personId, page);
  };
  const genders = ["Not set / not specified", "Female", "Male", "Non-binary"];

  const imageUrl = `https://image.tmdb.org/t/p/original/${actorsData.profile_path}`;

  return (
    <section className="py-6">
      <div className="flex flex-col gap-10">
        <div className="flex gap-10">
          <div>
            <MotionDiv
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap="click"
              transition={{ ease: "easeInOut", duration: 0.4 }}
              viewport={{ once: true }}
              className="min-w-64 h-96 rounded-xl shadow-custom overflow-hidden"
            >
              <div className="w-full h-full relative">
                <Image
                  src={imageUrl}
                  alt={actorsData.name}
                  fill
                  sizes="(max-width: 768px) 20vw, (max-width: 1024px) 15vw, 10vw"
                  quality={50}
                  className="object-cover"
                />
              </div>
            </MotionDiv>
          </div>
          <div>
            <h1 className="text-4xl font-bold py-3">{actorsData.name}</h1>
            <div className="py-2 space-y-2">
              <h2 className="text-2xl font-semibold">Biography</h2>
              <p className="font-medium text-sm">{actorsData.biography}</p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl font-bold">About</h1>
          <div className="space-y-2">
            <div>
              <span className="font-semibold">Gender: </span>
              <span>{genders[actorsData.gender]}</span>
            </div>
            <div>
              <span className="font-semibold">Place of birth: </span>
              <span>{actorsData.place_of_birth}</span>
            </div>
            <div>
              <span className="font-semibold">Date of birth: </span>
              <span>{actorsData.birthday}</span>
            </div>
            {actorsData.deathday && (
              <div>
                <span className="font-semibold">Died on: </span>
                <span>{actorsData.deathday}</span>
              </div>
            )}
            <div>
              <span className="font-semibold">Popularity: </span>
              <span>{actorsData.popularity}</span>
            </div>
            {actorsData.homepage && (
              <div>
                <span className="font-semibold">Homepage: </span>
                <span>{actorsData.homepage}</span>
              </div>
            )}
          </div>
        </div>
        <ContentCarousel
          contentType="movie"
          title={`Movies starring ${actorsData.name}`}
          fetchData={getActorsMoviesList}
        />
        <ContentCarousel
          contentType="tv"
          title={`TV shows starring ${actorsData.name}`}
          fetchData={getActorsTvShowsList}
        />
      </div>
    </section>
  );
};

export default PersonPage;

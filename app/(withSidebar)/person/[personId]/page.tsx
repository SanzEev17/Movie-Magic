import {
  getActorsDetail,
  getActorsMovie,
  getActorsTvShows,
} from "@/actions/getActorsDetail";
import AboutActor from "@/components/ActorDetail/AboutActor";
import ActorImage from "@/components/ActorDetail/ActorImage";
import Biography from "@/components/ActorDetail/Biography";
import ContentCarousel from "@/components/ContentCarousel";
import React from "react";

const PersonPage = async ({ params }: { params: { personId: string } }) => {
  const actorsData = await getActorsDetail(params.personId);
  const getActorsMoviesList = async (page: number = 1) => {
    return getActorsMovie(params.personId, page);
  };
  const getActorsTvShowsList = async (page: number = 1) => {
    return getActorsTvShows(params.personId, page);
  };

  return (
    <section className="py-6">
      <div className="flex flex-col gap-10">
        <div className="flex gap-10">
          <ActorImage
            profileUrl={actorsData.profile_path}
            actorsName={actorsData.name}
          />
          <div>
            <h1 className="text-4xl font-bold py-2">{actorsData.name}</h1>
            <Biography actorsBiography={actorsData.biography} />
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl font-bold">About</h1>
          <AboutActor
            gender={actorsData.gender}
            place_of_birth={actorsData.place_of_birth}
            birthday={actorsData.birthday}
            deathday={actorsData.deathday}
            popularity={actorsData.popularity}
            homepage={actorsData.homepage}
          />
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

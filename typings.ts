export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TVShow = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
};

export type Person = {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
};

export type MovieSearch = Movie & {
  media_type: string;
};

export type TVShowSearch = TVShow & {
  media_type: string;
};

export type PersonSearch = {
  id: string;
  original_name: string;
  media_type: string;
  adult: boolean;
  name: string;
  popularity: number;
  gender: number;
  known_for_department: string;
  profile_path: string;
  known_for: Array<Movie | TVShow>;
};

export type SearchResults = MovieSearch | TVShowSearch | PersonSearch;

export type Genre = {
  id: number;
  name: string;
};

export type Genres = {
  genres: Genre[];
};

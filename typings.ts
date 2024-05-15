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

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface MediaDetails {
  adult: boolean;
  backdrop_path: string;
  genres: Genre[];
  homepage: string | null;
  id: number;
  origin_country: string[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: Array<{ iso_3166_1: string; name: string }>;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetails extends MediaDetails {
  belongs_to_collection: string | null;
  budget: number;
  imdb_id: string;
  original_title: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
}

interface TvShowEpisode {
  id: number;
  overview: string;
  name: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}

export interface TVShowSeasons {
  air_date: string | null;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

export interface TVShowDetails extends MediaDetails {
  created_by: Array<{
    id: number;
    credit_id: string;
    name: string;
    original_name: string;
    gender: number;
    profile_path: string;
  }>;
  episode_run_time: number[];
  first_air_date: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: TvShowEpisode;
  name: string;
  next_episode_to_air: TvShowEpisode | null;
  networks: ProductionCompany[];
  number_of_episodes: number;
  number_of_seasons: number;
  original_name: string;
  seasons: TVShowSeasons[];
  status: string;
  tagline: string;
  type: string;
}

export interface Cast {
  adult: boolean;
  gender: boolean;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface TVSeasonEpisode {
  air_date: string;
  episode_number: number;
  episode_type: string;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  crew: Array<{
    department: string;
    job: string;
    credit_id: string;
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
  }>;
  guest_stars: Array<{
    character: string;
    credit_id: string;
    order: 8;
    adult: boolean;
    gender: 2;
    id: 61535;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: 15.189;
    profile_path: string;
  }>;
}
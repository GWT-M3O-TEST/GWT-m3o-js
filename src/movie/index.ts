import * as m3o from "@m3o/m3o-node";

export class MovieService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Search for movies by simple text search
  search(request: SearchRequest): Promise<SearchResponse> {
    return this.client.call(
      "movie",
      "Search",
      request
    ) as Promise<SearchResponse>;
  }
}

export interface MovieInfo {
  backdrop_path?: string;
  genre_ids?: number[];
  poster_path?: string;
  video?: boolean;
  vote_count?: number;
  original_title?: string;
  popularity?: number;
  vote_average?: number;
  adult?: boolean;
  id?: number;
  release_date?: string;
  original_language?: string;
  overview?: string;
  title?: string;
}

export interface SearchRequest {
  // a text query to search
  query?: string;
  // a ISO 3166-1 code to filter release dates.
  region?: string;
  // year of making
  year?: number;
  // a ISO 639-1 value to display translated data
  language?: string;
  // page to query
  page?: number;
  // year of release
  primary_release_year?: number;
}

export interface SearchResponse {
  page?: number;
  results?: MovieInfo[];
  total_pages?: number;
  total_results?: number;
}

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
  poster_path?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  original_language?: string;
  original_title?: string;
  popularity?: number;
  release_date?: string;
  vote_count?: number;
  genre_ids?: number;
  overview?: string;
  backdrop_path?: string;
  id?: number;
  adult?: boolean;
}

export interface SearchRequest {
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
  // a text query to search
  query?: string;
}

export interface SearchResponse {
  page?: number;
  results?: MovieInfo[];
  total_pages?: number;
  total_results?: number;
}

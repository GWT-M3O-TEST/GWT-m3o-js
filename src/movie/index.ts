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
  id?: number;
  popularity?: number;
  release_date?: string;
  title?: string;
  vote_count?: number;
  original_language?: string;
  overview?: string;
  video?: boolean;
  original_title?: string;
  vote_average?: number;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number;
  poster_path?: string;
}

export interface SearchRequest {
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
  // a ISO 3166-1 code to filter release dates.
  region?: string;
}

export interface SearchResponse {
  page?: number;
  results?: MovieInfo[];
  total_pages?: number;
  total_results?: number;
}

import * as m3o from "@m3o/m3o-node";

export class QuranService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // List the Chapters (surahs) of the Quran
  chapters(request: ChaptersRequest): Promise<ChaptersResponse> {
    return this.client.call(
      "quran",
      "Chapters",
      request
    ) as Promise<ChaptersResponse>;
  }
  // Search the Quran for any form of query or questions
  search(request: SearchRequest): Promise<SearchResponse> {
    return this.client.call(
      "quran",
      "Search",
      request
    ) as Promise<SearchResponse>;
  }
  // Get a summary for a given chapter (surah)
  summary(request: SummaryRequest): Promise<SummaryResponse> {
    return this.client.call(
      "quran",
      "Summary",
      request
    ) as Promise<SummaryResponse>;
  }
  // Lookup the verses (ayahs) for a chapter including
  // translation, interpretation and breakdown by individual
  // words.
  verses(request: VersesRequest): Promise<VersesResponse> {
    return this.client.call(
      "quran",
      "Verses",
      request
    ) as Promise<VersesResponse>;
  }
}

export interface Chapter {
  // The complex name of the chapter
  complex_name?: string;
  // The pages from and to e.g 1, 1
  pages?: number[];
  // Should the chapter start with bismillah
  prefix_bismillah?: boolean;
  // The place of revelation
  revelation_place?: string;
  // The translated name
  translated_name?: string;
  // The arabic name of the chapter
  arabic_name?: string;
  // The id of the chapter as a number e.g 1
  id?: number;
  // The simple name of the chapter
  name?: string;
  // The order in which it was revealed
  revelation_order?: number;
  // The number of verses in the chapter
  verses?: number;
}

export interface ChaptersRequest {
  // Specify the language e.g en
  language?: string;
}

export interface ChaptersResponse {
  chapters?: Chapter[];
}

export interface Interpretation {
  // The unique id of the interpretation
  id?: number;
  // The source of the interpretation
  source?: string;
  // The translated text
  text?: string;
}

export interface Result {
  // The associated arabic text
  text?: string;
  // The related translations to the text
  translations?: Translation[];
  // The unique verse id across the Quran
  verse_id?: number;
  // The verse key e.g 1:1
  verse_key?: string;
}

export interface SearchRequest {
  // The language for translation
  language?: string;
  // The number of results to return
  limit?: number;
  // The pagination number
  page?: number;
  // The query to ask
  query?: string;
}

export interface SearchResponse {
  // The current page
  page?: number;
  // The question asked
  query?: string;
  // The results for the query
  results?: Result[];
  // The total pages
  total_pages?: number;
  // The total results returned
  total_results?: number;
}

export interface SummaryRequest {
  // The chapter id e.g 1
  chapter?: number;
  // Specify the language e.g en
  language?: string;
}

export interface SummaryResponse {
  // The chapter id
  chapter?: number;
  // The source of the summary
  source?: string;
  // The short summary for the chapter
  summary?: string;
  // The full description for the chapter
  text?: string;
}

export interface Translation {
  // The translated text
  text?: string;
  // The unique id of the translation
  id?: number;
  // The source of the translation
  source?: string;
}

export interface Verse {
  // The unique id of the verse in the whole book
  id?: number;
  // The interpretations of the verse
  interpretations?: Interpretation[];
  // The key of this verse (chapter:verse) e.g 1:1
  key?: string;
  // The arabic text for this verse
  text?: string;
  // The basic translation of the verse
  translated_text?: string;
  // The alternative translations for the verse
  translations?: Translation[];
  // The individual words within the verse (Ayah)
  words?: Word[];
  // The verse number in this chapter
  number?: number;
  // The page of the Quran this verse is on
  page?: number;
  // The phonetic transliteration from arabic
  transliteration?: string;
}

export interface VersesRequest {
  // The verses per page
  limit?: number;
  // The page number to request
  page?: number;
  // Return alternate translations
  translate?: boolean;
  // Return the individual words with the verses
  words?: boolean;
  // The chapter id to retrieve
  chapter?: number;
  // Return the interpretation (tafsir)
  interpret?: boolean;
  // The language of translation
  language?: string;
}

export interface VersesResponse {
  // The chapter requested
  chapter?: number;
  // The page requested
  page?: number;
  // The total pages
  total_pages?: number;
  // The verses on the page
  verses?: Verse[];
}

export interface Word {
  // The character type e.g word, end
  char_type?: string;
  // The QCF v2 font code
  code?: string;
  // The arabic text for this word
  text?: string;
  // The transliteration text
  transliteration?: string;
  // The id of the word within the verse
  id?: number;
  // The line number
  line?: number;
  // The page number
  page?: number;
  // The position of the word
  position?: number;
  // The translated text
  translation?: string;
}

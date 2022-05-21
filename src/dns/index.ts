import * as m3o from "@m3o/m3o-node";

export class DnsService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Query an addresss
  query(request: QueryRequest): Promise<QueryResponse> {
    return this.client.call("dns", "Query", request) as Promise<QueryResponse>;
  }
}

export interface Answer {
  // name resolved
  name?: string;
  // type of record
  type?: number;
  // time to live
  TTL?: number;
  // the answer
  data?: string;
}

export interface QueryRequest {
  // name to resolve
  name?: string;
  // type of query e.g A, AAAA, MX, SRV
  type?: string;
}

export interface QueryResponse {
  AD?: boolean;
  RA?: boolean;
  provider?: string;
  CD?: boolean;
  RD?: boolean;
  TC?: boolean;
  answer?: Answer[];
  question?: Question[];
  status?: number;
}

export interface Question {
  // name to query
  name?: string;
  // type of record
  type?: number;
}

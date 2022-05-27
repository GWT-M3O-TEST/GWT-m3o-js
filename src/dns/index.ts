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
  // the answer
  data?: string;
  // name resolved
  name?: string;
  // type of record
  type?: number;
  // time to live
  TTL?: number;
}

export interface QueryRequest {
  // type of query e.g A, AAAA, MX, SRV
  type?: string;
  // name to resolve
  name?: string;
}

export interface QueryResponse {
  provider?: string;
  status?: number;
  AD?: boolean;
  CD?: boolean;
  RA?: boolean;
  RD?: boolean;
  TC?: boolean;
  answer?: Answer[];
  question?: Question[];
}

export interface Question {
  // name to query
  name?: string;
  // type of record
  type?: number;
}

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
  answer?: Answer[];
  question?: Question[];
  RD?: boolean;
  TC?: boolean;
  RA?: boolean;
  provider?: string;
  status?: number;
  AD?: boolean;
  CD?: boolean;
}

export interface Question {
  // type of record
  type?: number;
  // name to query
  name?: string;
}

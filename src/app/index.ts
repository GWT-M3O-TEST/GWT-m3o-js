import * as m3o from "@m3o/m3o-node";

export class AppService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Reserve your app name
  reserve(request: ReserveRequest): Promise<ReserveResponse> {
    return this.client.call(
      "app",
      "Reserve",
      request
    ) as Promise<ReserveResponse>;
  }
  // Vote to have the App api launched faster!
  vote(request: VoteRequest): Promise<VoteResponse> {
    return this.client.call("app", "Vote", request) as Promise<VoteResponse>;
  }
}

export interface Reservation {
  // time of reservation
  created?: string;
  // time reservation expires
  expires?: string;
  // name of the app
  name?: string;
  // owner id
  owner?: string;
  // associated token
  token?: string;
}

export interface ReserveRequest {
  // name of your app e.g helloworld
  name?: string;
}

export interface ReserveResponse {
  reservation?: { [key: string]: any };
}

export interface VoteRequest {
  // optional message
  message?: string;
}

export interface VoteResponse {
  // response message
  message?: string;
}
import * as m3o from "@m3o/m3o-node";

export class ContactService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  //
  create(request: CreateRequest): Promise<CreateResponse> {
    return this.client.call(
      "contact",
      "Create",
      request
    ) as Promise<CreateResponse>;
  }
  //
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "contact",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  //
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call(
      "contact",
      "List",
      request
    ) as Promise<ListResponse>;
  }
  //
  read(request: ReadRequest): Promise<ReadResponse> {
    return this.client.call(
      "contact",
      "Read",
      request
    ) as Promise<ReadResponse>;
  }
  //
  update(request: UpdateRequest): Promise<UpdateResponse> {
    return this.client.call(
      "contact",
      "Update",
      request
    ) as Promise<UpdateResponse>;
  }
}

export interface Address {
  // the address location
  location?: string;
  // the label of the address
  label?: string;
}

export interface ContactInfo {
  // the emails
  emails?: Email[];
  // contact id
  id?: string;
  // the contact links
  links?: Link[];
  // the phone numbers
  phones?: Phone[];
  // the social media username
  social_medias?: SocialMedia;
  // update date string in RFC3339
  updated_at?: string;
  // the address
  addresses?: Address[];
  // create date string in RFC3339
  created_at?: string;
  // the contact name
  name?: string;
  // note of the contact
  note?: string;
  // the birthday
  birthday?: string;
}

export interface CreateRequest {
  // optional, birthday
  birthday?: string;
  // optional, emails
  emails?: Email[];
  // optional, links
  links?: Link[];
  // required, the name of the contact
  name?: string;
  // optional, note of the contact
  note?: string;
  // optional, phone numbers
  phones?: Phone[];
  // optional, social media
  social_medias?: SocialMedia;
  // optional, location
  addresses?: Address[];
}

export interface CreateResponse {
  contact?: ContactInfo;
}

export interface DeleteRequest {
  // the id of the contact
  id?: string;
}

export interface DeleteResponse {}

export interface Email {
  // the email address
  address?: string;
  // the label of the email
  label?: string;
}

export interface Link {
  // the label of the link
  label?: string;
  // the url of the contact
  url?: string;
}

export interface ListRequest {
  // optional, default is 30
  limit?: number;
  // optional
  offset?: number;
}

export interface ListResponse {
  contacts?: ContactInfo[];
}

export interface Phone {
  // the label of the phone number
  label?: string;
  // phone number
  number?: string;
}

export interface ReadRequest {
  id?: string;
}

export interface ReadResponse {
  contact?: ContactInfo;
}

export interface SocialMedia {
  // the label of the social
  label?: string;
  // the username of social media
  username?: string;
}

export interface UpdateRequest {
  // optional, emails
  emails?: Email[];
  // required, the name
  name?: string;
  // optional, phone number
  phones?: Phone[];
  // optional, birthday
  birthday?: string;
  // required, the contact id
  id?: string;
  // optional, links
  links?: Link[];
  // optional, note
  note?: string;
  // optional, social media
  social_medias?: SocialMedia;
  // optional, addresses
  addresses?: Address[];
}

export interface UpdateResponse {
  contact?: ContactInfo;
}

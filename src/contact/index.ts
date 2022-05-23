import * as m3o from "@m3o/m3o-node";

export class ContactService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Create a contact
  create(request: CreateRequest): Promise<CreateResponse> {
    return this.client.call(
      "contact",
      "Create",
      request
    ) as Promise<CreateResponse>;
  }
  // Delete a contact
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "contact",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  // List contacts
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call(
      "contact",
      "List",
      request
    ) as Promise<ListResponse>;
  }
  // Read contact details
  read(request: ReadRequest): Promise<ReadResponse> {
    return this.client.call(
      "contact",
      "Read",
      request
    ) as Promise<ReadResponse>;
  }
  // Update a contact
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
  // contact id
  id?: string;
  // the contact name
  name?: string;
  // the birthday
  birthday?: string;
  // create date string in RFC3339
  created_at?: string;
  // the emails
  emails?: Email[];
  // the phone numbers
  phones?: Phone[];
  // the social media username
  social_medias?: SocialMedia[];
  // update date string in RFC3339
  updated_at?: string;
  // the address
  addresses?: Address[];
  // the contact links
  links?: Link[];
  // note of the contact
  note?: string;
}

export interface CreateRequest {
  // required, the name of the contact
  name?: string;
  // optional, note of the contact
  note?: string;
  // optional, phone numbers
  phones?: Phone[];
  // optional, social media
  social_medias?: SocialMedia[];
  // optional, location
  addresses?: Address[];
  // optional, birthday
  birthday?: string;
  // optional, emails
  emails?: Email[];
  // optional, links
  links?: Link[];
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
  // the label of the email
  label?: string;
  // the email address
  address?: string;
}

export interface Link {
  // the url of the contact
  url?: string;
  // the label of the link
  label?: string;
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
  // optional, birthday
  birthday?: string;
  // optional, emails
  emails?: Email[];
  // required, the contact id
  id?: string;
  // optional, note
  note?: string;
  // optional, phone number
  phones?: Phone[];
  // optional, addresses
  addresses?: Address[];
  // required, the name
  name?: string;
  // optional, social media
  social_medias?: SocialMedia[];
  // optional, links
  links?: Link[];
}

export interface UpdateResponse {
  contact?: ContactInfo;
}

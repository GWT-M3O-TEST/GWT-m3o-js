import * as m3o from "@m3o/m3o-node";

export class NftService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Return a list of assets
  assets(request: AssetsRequest): Promise<AssetsResponse> {
    return this.client.call(
      "nft",
      "Assets",
      request
    ) as Promise<AssetsResponse>;
  }
  // Get a list of collections
  collections(request: CollectionsRequest): Promise<CollectionsResponse> {
    return this.client.call(
      "nft",
      "Collections",
      request
    ) as Promise<CollectionsResponse>;
  }
  // Create your own NFT (coming soon)
  create(request: CreateRequest): Promise<CreateResponse> {
    return this.client.call(
      "nft",
      "Create",
      request
    ) as Promise<CreateResponse>;
  }
}

export interface Asset {
  // Creator of the NFT
  creator?: User;
  // related description
  description?: string;
  // the token id
  token_id?: string;
  // listing date
  listing_date?: string;
  // name of the asset
  name?: string;
  // Owner of the NFT
  owner?: User;
  // number of sales
  sales?: number;
  // associated collection
  collection?: Collection;
  // id of the asset
  id?: number;
  // the image url
  image_url?: string;
  // last time sold
  last_sale?: Sale;
  // is it a presale
  presale?: boolean;
  // asset contract
  contract?: Contract;
  // the permalink
  permalink?: string;
}

export interface AssetsRequest {
  // limit to members of a collection by slug name (case sensitive)
  collection?: string;
  // limit returned assets
  limit?: number;
  // offset for pagination
  offset?: number;
  // order "asc" or "desc"
  order?: string;
  // order by "sale_date", "sale_count", "sale_price", "total_price"
  order_by?: string;
}

export interface AssetsResponse {
  // list of assets
  assets?: Asset[];
}

export interface Collection {
  payout_address?: string;
  slug?: string;
  created_at?: string;
  description?: string;
  image_url?: string;
  name?: string;
}

export interface CollectionsRequest {
  offset?: number;
  limit?: number;
}

export interface CollectionsResponse {
  collections?: Collection[];
}

export interface Contract {
  // timestamp of creation
  created_at?: string;
  // name of contract
  name?: string;
  // owner id
  owner?: number;
  // seller fees
  seller_fees?: string;
  // related symbol
  symbol?: string;
  // ethereum address
  address?: string;
  // description of contract
  description?: string;
  // payout address
  payout_address?: string;
  // aka "ERC1155"
  schema?: string;
  // type of contract e.g "semi-fungible"
  type?: string;
}

export interface CreateRequest {
  // description
  description?: string;
  // image data
  image?: string;
  // name of the NFT
  name?: string;
  // data if not image
  data?: string;
}

export interface CreateResponse {
  asset?: Asset;
}

export interface Sale {
  created_at?: string;
  transaction?: Transaction;
  event_timestamp?: string;
  event_type?: string;
  payment_token?: Token;
  quantity?: string;
  total_price?: string;
  asset_decimals?: number;
  asset_token_id?: string;
}

export interface Token {
  address?: string;
  decimals?: number;
  eth_price?: string;
  id?: number;
  image_url?: string;
  name?: string;
  symbol?: string;
  usd_price?: string;
}

export interface Transaction {
  transaction_index?: string;
  block_hash?: string;
  block_number?: string;
  from_account?: User;
  id?: number;
  timestamp?: string;
  to_account?: User;
  transaction_hash?: string;
}

export interface User {
  address?: string;
  profile_url?: string;
  username?: string;
}

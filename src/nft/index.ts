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
  // the token id
  token_id?: string;
  // the image url
  image_url?: string;
  // last time sold
  last_sale?: Sale;
  // number of sales
  sales?: number;
  // associated collection
  collection?: Collection;
  // listing date
  listing_date?: string;
  // Owner of the NFT
  owner?: User;
  // the permalink
  permalink?: string;
  // is it a presale
  presale?: boolean;
  // asset contract
  contract?: Contract;
  // Creator of the NFT
  creator?: User;
  // related description
  description?: string;
  // id of the asset
  id?: number;
  // name of the asset
  name?: string;
}

export interface AssetsRequest {
  // order by "sale_date", "sale_count", "sale_price", "total_price"
  order_by?: string;
  // limit to members of a collection by slug name (case sensitive)
  collection?: string;
  // limit returned assets
  limit?: number;
  // offset for pagination
  offset?: number;
  // order "asc" or "desc"
  order?: string;
}

export interface AssetsResponse {
  // list of assets
  assets?: Asset[];
}

export interface Collection {
  slug?: string;
  created_at?: string;
  description?: string;
  image_url?: string;
  name?: string;
  payout_address?: string;
}

export interface CollectionsRequest {
  limit?: number;
  offset?: number;
}

export interface CollectionsResponse {
  collections?: Collection[];
}

export interface Contract {
  // description of contract
  description?: string;
  // owner id
  owner?: number;
  // payout address
  payout_address?: string;
  // aka "ERC1155"
  schema?: string;
  // seller fees
  seller_fees?: string;
  // ethereum address
  address?: string;
  // name of contract
  name?: string;
  // related symbol
  symbol?: string;
  // type of contract e.g "semi-fungible"
  type?: string;
  // timestamp of creation
  created_at?: string;
}

export interface CreateRequest {
  // data if not image
  data?: string;
  // description
  description?: string;
  // image data
  image?: string;
  // name of the NFT
  name?: string;
}

export interface CreateResponse {
  asset?: Asset;
}

export interface Sale {
  asset_token_id?: string;
  created_at?: string;
  payment_token?: Token;
  quantity?: string;
  asset_decimals?: number;
  event_timestamp?: string;
  event_type?: string;
  total_price?: string;
  transaction?: Transaction;
}

export interface Token {
  name?: string;
  symbol?: string;
  usd_price?: string;
  address?: string;
  decimals?: number;
  eth_price?: string;
  id?: number;
  image_url?: string;
}

export interface Transaction {
  from_account?: User;
  id?: number;
  timestamp?: string;
  to_account?: User;
  transaction_hash?: string;
  transaction_index?: string;
  block_hash?: string;
  block_number?: string;
}

export interface User {
  address?: string;
  profile_url?: string;
  username?: string;
}

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
  // is it a presale
  presale?: boolean;
  // the token id
  token_id?: string;
  // Creator of the NFT
  creator?: User;
  // related description
  description?: string;
  // last time sold
  last_sale?: Sale;
  // name of the asset
  name?: string;
  // the permalink
  permalink?: string;
  // number of sales
  sales?: number;
  // id of the asset
  id?: number;
  // the image url
  image_url?: string;
  // Owner of the NFT
  owner?: User;
  // asset contract
  contract?: Contract;
  // listing date
  listing_date?: string;
  // associated collection
  collection?: Collection;
}

export interface AssetsRequest {
  // offset for pagination
  offset?: number;
  // order "asc" or "desc"
  order?: string;
  // order by "sale_date", "sale_count", "sale_price", "total_price"
  order_by?: string;
  // limit to members of a collection by slug name (case sensitive)
  collection?: string;
  // limit returned assets
  limit?: number;
}

export interface AssetsResponse {
  // list of assets
  assets?: Asset[];
}

export interface Collection {
  created_at?: string;
  description?: string;
  image_url?: string;
  name?: string;
  payout_address?: string;
  slug?: string;
}

export interface CollectionsRequest {
  limit?: number;
  offset?: number;
}

export interface CollectionsResponse {
  collections?: Collection[];
}

export interface Contract {
  // timestamp of creation
  created_at?: string;
  // description of contract
  description?: string;
  // name of contract
  name?: string;
  // aka "ERC1155"
  schema?: string;
  // seller fees
  seller_fees?: string;
  // related symbol
  symbol?: string;
  // type of contract e.g "semi-fungible"
  type?: string;
  // ethereum address
  address?: string;
  // owner id
  owner?: number;
  // payout address
  payout_address?: string;
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
  total_price?: string;
  transaction?: Transaction;
  asset_decimals?: number;
  asset_token_id?: string;
  created_at?: string;
  quantity?: string;
  event_timestamp?: string;
  event_type?: string;
  payment_token?: Token;
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
  block_hash?: string;
  block_number?: string;
  from_account?: User;
  id?: number;
  timestamp?: string;
  to_account?: User;
  transaction_hash?: string;
  transaction_index?: string;
}

export interface User {
  username?: string;
  address?: string;
  profile_url?: string;
}

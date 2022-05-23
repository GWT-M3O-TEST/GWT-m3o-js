import * as m3o from "@m3o/m3o-node";

export class NftService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Get a single asset by the contract
  asset(request: AssetRequest): Promise<AssetResponse> {
    return this.client.call("nft", "Asset", request) as Promise<AssetResponse>;
  }
  // Return a list of assets
  assets(request: AssetsRequest): Promise<AssetsResponse> {
    return this.client.call(
      "nft",
      "Assets",
      request
    ) as Promise<AssetsResponse>;
  }
  // Get a collection by its slug
  collection(request: CollectionRequest): Promise<CollectionResponse> {
    return this.client.call(
      "nft",
      "Collection",
      request
    ) as Promise<CollectionResponse>;
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
  // last time sold
  last_sale?: Sale;
  // name of the asset
  name?: string;
  // the permalink
  permalink?: string;
  // associated collection
  collection?: Collection;
  // the token id
  token_id?: string;
  // listing date
  listing_date?: string;
  // the image url
  image_url?: string;
  // is it a presale
  presale?: boolean;
  // number of sales
  sales?: number;
  // traits associated with the item
  traits?: { [key: string]: any }[];
  // id of the asset
  id?: number;
  // Owner of the NFT
  owner?: User;
  // asset contract
  contract?: Contract;
}

export interface AssetRequest {
  contract_address?: string;
  token_id?: string;
}

export interface AssetResponse {
  asset?: Asset;
}

export interface AssetsRequest {
  // DEPRECATED offset for pagination, please use cursor instead
  offset?: number;
  // order "asc" or "desc"
  order?: string;
  // order by "sale_date", "sale_count", "sale_price", "total_price"
  order_by?: string;
  // limit to members of a collection by slug name (case sensitive)
  collection?: string;
  // A cursor pointing to the page to retrieve
  cursor?: string;
  // limit returned assets
  limit?: number;
}

export interface AssetsResponse {
  // A cursor to be supplied to retrieve the previous page of results
  previous?: string;
  // list of assets
  assets?: Asset[];
  // A cursor to be supplied to retrieve the next page of results
  next?: string;
}

export interface Collection {
  // name of the collection
  name?: string;
  // approved editors for this collection
  editors?: string[];
  // an image for the collection
  image_url?: string;
  // external link to the original website for the collection
  external_link?: string;
  // listing of all the trait types available within this collection
  traits?: { [key: string]: any };
  // sales statistics associated with the collection
  stats?: { [key: string]: any };
  // creation time
  created_at?: string;
  // the collection's approval status on OpenSea
  safelist_request_status?: string;
  // the payment tokens accepted for this collection
  payment_tokens?: Token[];
  // payout address for the collection's royalties
  payout_address?: string;
  // a list of the contracts associated with this collection
  primary_asset_contracts?: Contract[];
  // the fees that get paid out when a sale is made
  seller_fees?: string;
  // collection slug
  slug?: string;
  // image used in the banner for the collection
  banner_image_url?: string;
  // description of the collection
  description?: string;
}

export interface CollectionRequest {
  slug?: string;
}

export interface CollectionResponse {
  collection?: Collection;
}

export interface CollectionsRequest {
  offset?: number;
  limit?: number;
}

export interface CollectionsResponse {
  collections?: Collection[];
}

export interface Contract {
  // description of contract
  description?: string;
  // name of contract
  name?: string;
  // seller fees
  seller_fees?: string;
  // related symbol
  symbol?: string;
  // ethereum address
  address?: string;
  // timestamp of creation
  created_at?: string;
  // aka "ERC1155"
  schema?: string;
  // type of contract e.g "semi-fungible"
  type?: string;
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
  asset_decimals?: number;
  quantity?: string;
  transaction?: Transaction;
  asset_token_id?: string;
  created_at?: string;
  event_timestamp?: string;
  event_type?: string;
  payment_token?: Token;
  total_price?: string;
}

export interface Token {
  id?: number;
  image_url?: string;
  name?: string;
  symbol?: string;
  usd_price?: string;
  address?: string;
  decimals?: number;
  eth_price?: string;
}

export interface Transaction {
  to_account?: User;
  transaction_hash?: string;
  transaction_index?: string;
  block_hash?: string;
  block_number?: string;
  from_account?: User;
  id?: number;
  timestamp?: string;
}

export interface User {
  address?: string;
  profile_url?: string;
  username?: string;
}

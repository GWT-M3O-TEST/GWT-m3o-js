import * as m3o from "@m3o/m3o-node";

export class EvchargersService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Retrieve reference data as used by this API and in conjunction with the Search endpoint
  referenceData(request: ReferenceDataRequest): Promise<ReferenceDataResponse> {
    return this.client.call(
      "evchargers",
      "ReferenceData",
      request
    ) as Promise<ReferenceDataResponse>;
  }
  // Search by giving a coordinate and a max distance, or bounding box and optional filters
  search(request: SearchRequest): Promise<SearchResponse> {
    return this.client.call(
      "evchargers",
      "Search",
      request
    ) as Promise<SearchResponse>;
  }
}

export interface Address {
  address_line_1?: string;
  address_line_2?: string;
  country_id?: string;
  postcode?: string;
  state_or_province?: string;
  title?: string;
  // Any comments about how to access the charger
  access_comments?: string;
  lat_lng?: string;
  location?: Coordinates;
  town?: string;
  country?: Country;
}

export interface BoundingBox {
  top_right?: Coordinates;
  bottom_left?: Coordinates;
}

export interface ChargerType {
  title?: string;
  comments?: string;
  id?: string;
  // Is this 40KW+
  is_fast_charge_capable?: boolean;
}

export interface CheckinStatusType {
  id?: string;
  is_automated?: boolean;
  is_positive?: boolean;
  title?: string;
}

export interface Connection {
  reference?: string;
  // The amps offered
  amps?: number;
  // The ID of the connection type
  connection_type_id?: string;
  level?: ChargerType;
  // The level of charging power available
  level_id?: string;
  connection_type?: ConnectionType;
  // The current
  current?: string;
  // The power in KW
  power?: number;
  // The voltage offered
  voltage?: number;
}

export interface ConnectionType {
  id?: string;
  is_discontinued?: boolean;
  is_obsolete?: boolean;
  title?: string;
  formal_name?: string;
}

export interface Coordinates {
  latitude?: number;
  longitude?: number;
}

export interface Country {
  continent_code?: string;
  id?: string;
  iso_code?: string;
  title?: string;
}

export interface CurrentType {
  description?: string;
  id?: string;
  title?: string;
}

export interface DataProvider {
  // How is this data licensed
  license?: string;
  title?: string;
  website?: string;
  comments?: string;
  data_provider_status_type?: DataProviderStatusType;
  id?: string;
}

export interface DataProviderStatusType {
  id?: string;
  is_provider_enabled?: boolean;
  title?: string;
}

export interface Operator {
  // Is this operator a private individual vs a company
  is_private_individual?: boolean;
  phone_secondary?: string;
  title?: string;
  website?: string;
  comments?: string;
  fault_report_email?: string;
  id?: string;
  phone_primary?: string;
  contact_email?: string;
}

export interface Poi {
  // The address
  address?: Address;
  // The ID of the data provider
  data_provider_id?: string;
  // The ID of the charger
  id?: string;
  // The ID of the operator of the charger
  operator_id?: string;
  // The type of usage
  usage_type?: UsageType;
  // The connections available at this charge point
  connections?: Connection[];
  // The cost of charging
  cost?: string;
  // The number of charging points
  num_points?: number;
  // The operator
  operator?: Operator;
  // The type of usage for this charger point (is it public, membership required, etc)
  usage_type_id?: string;
}

export interface ReferenceDataRequest {}

export interface ReferenceDataResponse {
  // The different types of usage
  usage_types?: UsageType;
  // The types of user comment
  user_comment_types?: UserCommentType;
  // The types of connection
  connection_types?: ConnectionType;
  // The countries
  countries?: Country[];
  // The types of current
  current_types?: CurrentType;
  // The status of the charger
  status_types?: StatusType;
  // The status of a submission
  submission_status_types?: SubmissionStatusType;
  // The types of charger
  charger_types?: ChargerType;
  // The types of checkin status
  checkin_status_types?: CheckinStatusType;
  // The providers of the charger data
  data_providers?: DataProvider;
  // The companies operating the chargers
  operators?: Operator[];
}

export interface SearchRequest {
  // Bounding box to search within (top left and bottom right coordinates)
  box?: BoundingBox;
  // IDs of the connection type
  connection_types?: string;
  // Minimum power in KW. Note: data not available for many chargers
  min_power?: number;
  // IDs of the the EV charger operator
  operators?: string[];
  // Usage of the charge point (is it public, membership required, etc)
  usage_types?: string;
  // Country ID
  country_id?: string;
  // Search distance from point in metres, defaults to 5000m
  distance?: number;
  // Supported charging levels
  levels?: string[];
  // Coordinates from which to begin search
  location?: Coordinates;
  // Maximum number of results to return, defaults to 100
  max_results?: number;
}

export interface SearchResponse {
  pois?: Poi[];
}

export interface StatusType {
  title?: string;
  id?: string;
  is_operational?: boolean;
}

export interface SubmissionStatusType {
  title?: string;
  id?: string;
  is_live?: boolean;
}

export interface UsageType {
  is_pay_at_location?: boolean;
  title?: string;
  id?: string;
  is_access_key_required?: boolean;
  is_membership_required?: boolean;
}

export interface UserCommentType {
  id?: string;
  title?: string;
}

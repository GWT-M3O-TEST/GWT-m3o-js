import * as m3o from "@m3o/m3o-node";

export class VehicleService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Lookup a UK vehicle by it's registration number
  lookup(request: LookupRequest): Promise<LookupResponse> {
    return this.client.call(
      "vehicle",
      "Lookup",
      request
    ) as Promise<LookupResponse>;
  }
}

export interface LookupRequest {
  // the vehicle registration number
  registration?: string;
}

export interface LookupResponse {
  // year of manufacture
  year_of_manufacture?: number;
  // mot expiry
  mot_expiry?: string;
  // tax due data
  tax_due_date?: string;
  // month of first registration
  month_of_first_registration?: string;
  // fuel type e.g petrol, diesel
  fuel_type?: string;
  // url of logo for the make
  logo_url?: string;
  // date of last v5 issue
  last_v5_issued?: string;
  // type approvale
  type_approval?: string;
  // wheel plan
  wheelplan?: string;
  // colour of vehicle
  colour?: string;
  // engine capacity
  engine_capacity?: number;
  // mot status
  mot_status?: string;
  // registration number
  registration?: string;
  // tax status
  tax_status?: string;
  // co2 emmissions
  co2_emissions?: number;
  // make of vehicle
  make?: string;
}

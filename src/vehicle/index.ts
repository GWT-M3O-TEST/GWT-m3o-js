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
  // tax due data
  tax_due_date?: string;
  // wheel plan
  wheelplan?: string;
  // mot status
  mot_status?: string;
  // fuel type e.g petrol, diesel
  fuel_type?: string;
  // url of logo for the make
  logo_url?: string;
  // tax status
  tax_status?: string;
  // type approvale
  type_approval?: string;
  // engine capacity
  engine_capacity?: number;
  // month of first registration
  month_of_first_registration?: string;
  // year of manufacture
  year_of_manufacture?: number;
  // co2 emmissions
  co2_emissions?: number;
  // date of last v5 issue
  last_v5_issued?: string;
  // make of vehicle
  make?: string;
  // mot expiry
  mot_expiry?: string;
  // registration number
  registration?: string;
  // colour of vehicle
  colour?: string;
}

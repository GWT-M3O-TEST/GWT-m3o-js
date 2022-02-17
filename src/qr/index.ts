import * as m3o from "@m3o/m3o-node";

export class QrService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Generate a QR code with a specific text and size
  generate(request: GenerateRequest): Promise<GenerateResponse> {
    return this.client.call(
      "qr",
      "Generate",
      request
    ) as Promise<GenerateResponse>;
  }
}

export interface GenerateRequest {
  // the text to encode as a QR code (URL, phone number, email, etc)
  text?: string;
  // the size (height and width) in pixels of the generated QR code. Defaults to 256
  size?: number;
}

export interface GenerateResponse {
  // link to the QR code image in PNG format
  qr?: string;
}

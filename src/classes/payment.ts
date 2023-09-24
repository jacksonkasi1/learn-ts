import { Invoice } from "./invoice.js";
import { DataInterface } from "../interfaces/Content.js";

export class Payment extends Invoice implements DataInterface {
  constructor(client: string, details: string, amount: number) {
    super(client, details, amount);
  }
}

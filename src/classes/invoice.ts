import { DataInterface } from "../interfaces/Content.js";

export class Invoice implements DataInterface {
  constructor(
    public readonly client: string,
    public details: string,
    public amount: number,
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

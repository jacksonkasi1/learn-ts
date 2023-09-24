import { Invoice } from "./invoice.js";
export class Payment extends Invoice {
    constructor(client, details, amount) {
        super(client, details, amount);
    }
}

import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
import { DataInterface } from "./interfaces/Content.js";

let eml = document.querySelector("h1");
eml!.textContent = "Hello World";

const form = document.querySelector(".form") as HTMLFormElement;
const type = document.getElementById("type") as HTMLSelectElement;
const fromTo = document.getElementById("from-to") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const list = document.querySelector(".list") as HTMLUListElement;

const invoices: Invoice[] = [];

const ul  = document.querySelector("ul")!;
const listTemplate = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let invoice = new Invoice(type.value, fromTo.value, amount.valueAsNumber);
  invoices.push(invoice);

  console.log(invoices);

  let doc: DataInterface;
  if (type.value === "invoice") {
    doc = new Payment(type.value, fromTo.value, amount.valueAsNumber);
  } else {
    doc = new Invoice(type.value, fromTo.value, amount.valueAsNumber);
  }

  listTemplate.render(doc, invoices.length);

  //   list.innerHTML += `<li>${invoice.format()}</li>`;

//   list.innerHTML += `<li>${doc.format()}</li>`;
});

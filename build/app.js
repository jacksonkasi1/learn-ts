import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
let eml = document.querySelector("h1");
eml.textContent = "Hello World";
const form = document.querySelector(".form");
const type = document.getElementById("type");
const fromTo = document.getElementById("from-to");
const amount = document.getElementById("amount");
const details = document.getElementById("details");
const list = document.querySelector(".list");
const invoices = [];
const ul = document.querySelector("ul");
const listTemplate = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let invoice = new Invoice(type.value, fromTo.value, amount.valueAsNumber);
    invoices.push(invoice);
    console.log(invoices);
    let doc;
    if (type.value === "invoice") {
        doc = new Payment(type.value, fromTo.value, amount.valueAsNumber);
    }
    else {
        doc = new Invoice(type.value, fromTo.value, amount.valueAsNumber);
    }
    listTemplate.render(doc, invoices.length);
    //   list.innerHTML += `<li>${invoice.format()}</li>`;
    //   list.innerHTML += `<li>${doc.format()}</li>`;
});

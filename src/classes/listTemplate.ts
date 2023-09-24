import { DataInterface } from "../interfaces/Content.js";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: DataInterface, count: number) {
    const itemElement = document.createElement("li");
    // itemElement.textContent = `${item} - ${count}`;
    
    const p = document.createElement("p");
    p.textContent = item.format();

    itemElement.append(p);

    this.container.append(itemElement);

  }
}

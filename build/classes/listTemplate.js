export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, count) {
        const itemElement = document.createElement("li");
        // itemElement.textContent = `${item} - ${count}`;
        const p = document.createElement("p");
        p.textContent = item.format();
        itemElement.append(p);
        this.container.append(itemElement);
    }
}

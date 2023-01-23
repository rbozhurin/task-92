import { formatCurrency } from "./utils";
import classNames from "classnames";

export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");

    this.container.addEventListener("click", this.render);
    // this.render();
  }
  deleteContent() {
    this.container.innerHTML = "";
  }

  render(price, type) {
    const template = `
<div class="notification type-${type}">
  <button class="delete"></button>
  🍕 <span class="type">pepperoni</span> (<span class="price">${formatCurrency(
    price
  )}</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
  }
}

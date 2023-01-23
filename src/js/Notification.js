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
    this.notification = document.querySelector(".notifications");
    this.container.classList.add("notification-container");
  }

  empty() {
    this.container.remove();
  }

  render({ type, price }) {
    const template = `<div  class="notification type-${this.type} ${classNames({
      "is-danger": this.type === Card.types.HAWAIIAN,
    })}">
    
  <button class="delete"></button>
  🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(
      price
    )}</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
    this.notification.appendChild(this.container);

    this.container.querySelector(".delete").addEventListener("click", () => {
      this.empty();
    });
  }
}

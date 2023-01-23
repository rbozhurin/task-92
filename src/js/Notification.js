let { formatCurrency } = require("./utils");
import classNames from "classnames";
//import formatCurrency from './utils'

export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.notification = document.querySelector(".notifications");
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
  }

  render({ type, price }) {
    const template = `
<div class="${classNames("notification", `type-${type}`)}">
  <button class="delete"></button>
  🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(
      price
    )}</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
    this.notification.appendChild(this.container);

    document.querySelector(".delete").addEventListener("click", () => {});
  }
}

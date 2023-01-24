import EventEmitter from "eventemitter3";
import Card from "./Card";
import Notification from "./Notification";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    let pizzas = [
      {
        type: "Hawaiian",
        emoji: "🍍",
        price: 13.99,
      },
      {
        type: "Pepperoni",
        emoji: "🍕",
        price: 14.99,
      },
      {
        type: "Margherita",
        emoji: "🍅",
        price: 11.99,
      },
    ];

    pizzas.forEach((pizza) => {
      const card = new Card({ ...pizza });
      card.render();
      card.on(Card.events.ADD_TO_CART, (obj) => new Notification().render(obj));
      document.querySelector(".main").appendChild(card.container);
    });

    this.emit(Application.events.READY);
  }
}

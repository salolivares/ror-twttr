import { Controller } from "@hotwired/stimulus";
import { useClickOutside } from "stimulus-use";

// Connects to data-controller="dropdown"
export default class extends Controller {
  static classes = ["menu", "button"];
  static targets = ["menu", "button"];
  static values = { initialActive: { type: Boolean, default: false } };

  connect() {
    useClickOutside(this);

    if (this.initialActiveValue === true) {
      // use the initialActiveValue passed from data-dropdown-initial-active-value to optionally toggle our class
      this.toggle();
    }
  }

  clickOutside(event) {
    this.close();
  }

  closeWithKeyboard(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  toggle() {
    this.menuClasses.map((c) =>
      this.menuTargets.map((t) => t.classList.toggle(c))
    );

    this.buttonClasses.map((c) =>
      this.buttonTargets.map((t) => t.classList.toggle(c))
    );
  }

  close() {
    this.menuClasses.map((c) =>
      this.menuTargets.map((t) => t.classList.add(c))
    );

    this.buttonClasses.map((c) =>
      this.buttonTargets.map((t) => t.classList.remove(c))
    );
  }
}

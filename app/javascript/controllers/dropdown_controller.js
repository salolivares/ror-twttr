import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="dropdown"
export default class extends Controller {
  static classes = ["menu", "button"];
  static targets = ["menu", "button"];
  static values = { initialActive: { type: Boolean, default: false } };

  connect() {
    if (this.initialActiveValue === true) {
      // use the initialActiveValue passed from data-dropdown-initial-active-value to optionally toggle our class
      this.toggle();
    }
  }

  toggle() {
    this.menuClasses.map((c) => this.menuTarget.classList.toggle(c));
    this.buttonClasses.map((c) => this.buttonTarget.classList.toggle(c));
  }
}

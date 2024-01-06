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

  closeOnBigScreen(event) {
    if (window.innerWidth > 768) {
      this.close();
    }
  }

  toggle() {
    console.log("hit");
    this.menuClasses.map((c) => this.menuTarget.classList.toggle(c));
    this.buttonClasses.map((c) => this.buttonTarget.classList.toggle(c));
  }

  close() {
    this.menuClasses.map((c) => this.menuTarget.classList.add(c));
    this.buttonClasses.map((c) => this.buttonTarget.classList.remove(c));
    // let main = document.querySelector("main")
    // main.classList.remove("blur")
    // document.body.classList.remove("overflow-hidden");
    // main.classList.remove("hidden")
  }
}

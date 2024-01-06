import { Controller } from "@hotwired/stimulus";
import { useClickOutside } from "stimulus-use";

// Connects to data-controller="dropdown"
export default class extends Controller {
  static classes = ["menu", "button"];
  static targets = ["menu", "button", "visibility"];
  static values = {
    initialActive: { type: Boolean, default: false },
    visibility: { type: String, default: "block" },
  };

  connect() {
    useClickOutside(this);

    // save initial visibility states, hashmap of index and visibility value created from this.visibilityTargets
    this.initialVisibilityState = new Map();
    this.visibilityTargets.map((t, index) =>
      this.initialVisibilityState.set(
        index,
        t.classList.contains("hidden") ? "hidden" : this.visibilityValue
      )
    );

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

    this.visibilityTargets.map((t) => {
      if (t.classList.contains("hidden")) {
        t.classList.remove("hidden");
        t.classList.add(this.visibilityValue);
      } else {
        t.classList.add("hidden");
        t.classList.remove(this.visibilityValue);
      }
    });
  }

  close() {
    this.menuClasses.map((c) =>
      this.menuTargets.map((t) => t.classList.add(c))
    );

    this.buttonClasses.map((c) =>
      this.buttonTargets.map((t) => t.classList.remove(c))
    );

    this.visibilityTargets.map((t, index) => {
      t.classList.remove(this.visibilityValue);
      t.classList.remove("hidden");
      t.classList.add(this.initialVisibilityState.get(index));
    });
  }
}

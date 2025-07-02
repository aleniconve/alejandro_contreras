import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["image", "overlay"]

  connect() {
    this.revealed = false
  }

  reveal() {
    if (!this.revealed) {
      this.element.classList.add("revealed")
      this.revealed = true
    }
  }
}

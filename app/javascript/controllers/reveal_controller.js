import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(this.element);

    this.revealed = false;
    this.hideTimeout = null;

    // Select all reveal containers once
    this.allContainers = document.querySelectorAll('.reveal-container');

    const revealAll = () => {
      if (!this.revealed) {
        this.revealed = true;
        this.allContainers.forEach(el => el.classList.add('revealed'));
      }
      // If hiding was scheduled, cancel it
      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
    };

    const hideAllDelayed = () => {
      // Schedule to hide after 4 seconds if no mouse enters again
      this.hideTimeout = setTimeout(() => {
        this.allContainers.forEach(el => el.classList.remove('revealed'));
        this.revealed = false;
        this.hideTimeout = null;
      }, 4000);
    };

    // Attach event listeners to all containers
    this.allContainers.forEach(el => {
      el.addEventListener('mouseenter', revealAll);
      el.addEventListener('mouseleave', hideAllDelayed);
    });
  }
}

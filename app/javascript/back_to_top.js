document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");
  if (!backToTop) return;

  // Show/hide on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  // Bounce once after 5s of inactivity
  let timeoutId;
  let hasBounced = false;

  function startBounce() {
    if (!hasBounced) {
      backToTop.classList.add("bounce");
      hasBounced = true;
      setTimeout(() => {
        backToTop.classList.remove("bounce");
      }, 1000); // matches bounce animation duration
    }
  }

  function resetTimer() {
    clearTimeout(timeoutId);
    hasBounced = false;
    timeoutId = setTimeout(startBounce, 5000);
  }

  resetTimer();
  window.addEventListener("mousemove", resetTimer);
  window.addEventListener("keydown", resetTimer);
  window.addEventListener("scroll", resetTimer);
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("back_to_top.js loaded");

  const backToTop = document.getElementById("backToTop");
  console.log("backToTop element:", backToTop);

  if (!backToTop) return;

  window.addEventListener("scroll", () => {
    console.log("Scroll Y position:", window.scrollY);

    if (window.scrollY > 100) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });
});

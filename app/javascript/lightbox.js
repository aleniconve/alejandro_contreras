document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".lightbox-link");
  const lightbox = document.getElementById("lightbox-overlay");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeBtn = document.getElementById("lightbox-close");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const imgSrc = link.getAttribute("href");
      lightboxImage.src = imgSrc;
      lightbox.style.display = "flex";
    });
  });

  // Close on clicking close button or overlay
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImage.src = "";
  });

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      lightboxImage.src = "";
    }
  });
});

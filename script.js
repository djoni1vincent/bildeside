// Enkel JavaScript-funksjonalitet for bildesiden

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      alert(`Du klikket på ${img.alt}`);
    });
  });
});

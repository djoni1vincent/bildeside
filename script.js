
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");

  // Создаем pop-up контейнер
  const popup = document.createElement("div");
  popup.id = "popup";
  popup.style.display = "none";
  popup.style.position = "fixed";
  popup.style.top = "0";
  popup.style.left = "0";
  popup.style.width = "100%";
  popup.style.height = "100%";
  popup.style.backgroundColor = "rgba(0,0,0,0.8)";
  popup.style.display = "flex";
  popup.style.alignItems = "center";
  popup.style.justifyContent = "center";
  popup.style.zIndex = "1000";

  // Фото внутри pop-up
  const popupImg = document.createElement("img");
  popupImg.style.maxWidth = "90%";
  popupImg.style.maxHeight = "90%";
  popup.appendChild(popupImg);

  // Закрытие при клике на фон
  popup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  document.body.appendChild(popup);

  // При клике на картинку
  images.forEach(img => {
    img.addEventListener("click", () => {
      popupImg.src = img.src;
      popup.style.display = "flex";
    });
  });
});
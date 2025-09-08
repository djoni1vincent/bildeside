document.addEventListener("DOMContentLoaded", () => {
const images = document.querySelectorAll(".gallery img")

const popup = document.createElement("div");
popup.id = "popup";

const popupImg = document.createElement("img");
popup.appendChild(popupImg)

document.body.appendChild(popup);


images.forEach(img => {
  img.addEventListener("click", () => {
    popupImg.src = img.src;
    popup.classList.add("show");
  });

popup.addEventListener("click", () => {
  popup.classList.remove("show");
});

});
})
